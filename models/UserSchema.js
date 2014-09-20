var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Pokedex = require('../models/PokedexSchema');


var UserSchema = new Schema({
	id: ObjectId,

	email: { type: String, lowercase: true, required: true, index: { unique: true } },
	password: { type: String, required: true, default: '' },
	created_on: { type : Date, default : Date.now },
	updated_on: { type : Date, default : Date.now }
});

var User = mongoose.model('User', UserSchema);

var AddUser = function(email) {
	var newuser = new User({ 
		email: email
	});
	newuser.save(function(err){
		if(err) console.log(err);
	});
	Pokedex.addPokedex(email);
}

User.AddUser = AddUser;
module.exports = User;