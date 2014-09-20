
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
app.use(express.session({ secret: 'POKEMONIMTHEELITEFOURBIOTCHES1231312!!' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);



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
    	if (!bcrypt.compareSync(password, user.password)) {
    		return done(null, false, { message: 'Incorrect password.' });
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

app.get('/', routes.index);

var httpserver = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io')(httpserver);
io.on('connection', function (socket) {
  socket.emit('welcome', { welcome: 'welcome' });
  socket.on('getPokedexDump', function (data) {
    console.log(data.email);
    socket.emit('PokedexDump', { pokedexDump: Pokedex.dumpPokedex(data.email) });
  });
});



//var Pokedex = require('./models/PokedexSchema.js');
//Pokedex.dumpPokedex('jack@email.com');
