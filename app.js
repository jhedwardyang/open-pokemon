
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// models 
var mongoose = require('mongoose'),
	User = require('./models/UserSchema.js');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.disable('etag');//http://stackoverflow.com/questions/18811286/nodejs-express-cache-and-304-status-code
app.use( express.cookieParser() );
app.use(express.session({ secret: 'POKEMONIMTHEELITEFOURBIOTCHES1231312!!' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);

var Pokedex = require('./models/PokedexSchema.js');
var Spawner = require('./routes/spawnpokemon.js');

//http://stackoverflow.com/questions/14641308/how-to-totally-prevent-http-304-responses-in-connect-express-static-middleware
app.use(function(req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();    
});

User.findOne({ email: "jh.edwardyang@gmail.com" }, function (err, user) {
  if(!user) {
  	User.AddUser("jh.edwardyang@gmail.com");
  	User.AddUser("lj.john.liu@gmail.com");
  	User.AddUser("jackgao2006@gmail.com");
  	User.AddUser("nguyen.kevin@hotmail.com");
  }
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
  }, function(username, password, done) {
  	if (!mongoose.connection.readyState){
    	mongoose.connect('mongodb://localhost/open-pokemon');
    }
    User.findOne({ email: username }, function (err, user) {
    	if (err) { return done(err); }
    	if (!user) {
    		return done(null, false, { message: 'Incorrect username.' });
    	}
    	return done(null, user);
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/data', function(req, res) {
  console.log(req.body.data);
  res.redirect('/');
});
app.get('/', routes.index);
app.get('/login', function(req, res) {
  res.redirect('/login.html');
});
app.post('/login', function(req, res, next) {
  req.body.email = req.body.email.toLowerCase();
  passport.authenticate('local', function(err, user, info) {
    if(req.body.email != "") {
      if (!user) { 
        User.AddUser( req.body.email );
        setTimeout(function(){
          User.findOne({ email: req.body.email }, function (err, zz) {
            req.login(zz, function(error){});
          });
        }, 300)
      } else {
        req.login(user, function(error){});
      }
      setTimeout(function(){
        res.redirect('/map');
      }, 600)
     } else {
      res.redirect('/');
     }
  })(req,res,next);
});
app.get('/map', routes.map);
app.get('/logout', routes.logout);

var httpserver = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io')(httpserver);
io.on('connection', function (socket) {
  socket.emit('welcome', { welcome: 'welcome' });
  socket.on('move', function (data) {
    // spawn pokemon?
    if(Math.random() < 0.25) Spawner.spawn(data.email, data.lng, data.lat, socket);
  });

  socket.on('getPokedexDump', function (data) {
    Pokedex.dumpPokedex(data.email, socket);
  });

  socket.on('seePokemon', function (data) {
    console.log(data.email + " sees " + data.pid);
    Pokedex.seePokemon(data.email, data.pid);
  });

  socket.on('catchPokemon', function (data) {
    console.log(data.email + " catches " + data.pid);
    Pokedex.catchPokemon(data.email, data.pid);
    User.catchPokemon(data.email, data.pokemon);
  });

  socket.on('getRoster', function (data) {
    User.getRoster(data.email, socket);
  });
});



//Pokedex.addPokemon('jack@email.com', 3);
//Pokedex.catchPokemon('jack@email.com', 3);
//Pokedex.dumpPokedex('jack@email.com');
