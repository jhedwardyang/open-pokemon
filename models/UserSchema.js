var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Pokedex = require('../models/PokedexSchema');


var UserSchema = new Schema({
	id: ObjectId,

	email: { type: String, lowercase: true, required: true, index: { unique: true } },
	password: { type: String, required: true, default: '' },

	roster: [ { bo: [String] }],

	created_on: { type : Date, default : Date.now },
	updated_on: { type : Date, default : Date.now }
});

var User = mongoose.model('User', UserSchema);

var AddUser = function(email) {
	var newuser = new User({ 
		email: email,
		roster: []
	});
	newuser.save(function(err){
		if(err) console.log(err);
	});
	Pokedex.addPokedex(email);
}

var catchPokemon = function(email, pokemon) {
	User.findOne({ email: email }, function (err, user) {
		if (err) console.log(err);
		if (user) {
			var roster = user.roster;
			roster.push(pokemon);
			User.where({ email: email }).update({ roster: roster }, function(err, suc) { if(err){console.log(err);} });
		}
	});
}

var getRoster = function(email, socket) {
	User.findOne({ email: email }, function (err, user) {
		if (err) console.log(err);
		if (user) socket.emit('roster', user.roster);
	});
}

User.AddUser = AddUser;
User.catchPokemon = catchPokemon;
User.getRoster = getRoster;
module.exports = User;