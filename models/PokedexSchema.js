var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	PokeList = require('../data/pokemon.json');

if (!mongoose.connection.readyState){
	mongoose.connect('mongodb://localhost/open-pokemon');
}

var PokedexSchema = new Schema({
	id: ObjectId,

	email: { type: String, lowercase: true, required: true, index: { unique: true } },
	seen: [ Number ],
	caught: [ Number ],
	created_on: { type : Date, default : Date.now },
	updated_on: { type : Date, default : Date.now }
});

var Pokedex = mongoose.model('Pokedex', PokedexSchema);

var addPokedex = function(email) {
	var newpokedex = new Pokedex({ 
		email: email,
		seen: [],
		caught: []
	});
	newpokedex.save(function(err){
		if(err) console.log(err);
	});
}

var seePokemon = function(email, pid) {
	Pokedex.findOne({ email: email }, function (err, pokedex) {
		if (err) console.log(err);
		if (pokedex) {
			var seenlist = pokedex.seen;
			if (seenlist.indexOf(pid) < 0) seenlist.push(pid);
			Pokedex.where({ email: email }).update({ seen: seenlist }, function(err, suc) { if(err){console.log(err);} });
		}
	});
}

var catchPokemon = function(email, pid) {
	Pokedex.findOne({ email: email }, function (err, pokedex) {
		if (err) console.log(err);
		if (pokedex) {
			var caughtlist = pokedex.caught;
			if (caughtlist.indexOf(pid) < 0) caughtlist.push(pid);
			Pokedex.where({ email: email }).update({ caught: caughtlist }, function(err, suc) { if(err){console.log(err);} });
		}
	});
}

var dumpPokedex = function(email) {
	Pokedex.findOne({ email: email }, function (err, pokedex) {
		if (err) console.log(err);
		if (pokedex) {
			var seenList = pokedex.seen;
			var caughtList = pokedex.caught;

			var localList = [];
			for(var i = 0; i < PokeList.length; i++) {
				localList[i] = PokeList[i].slice(0);

				var status = 0;
				if(seenList.indexOf(i) >= 0) status = 1;
				if(caughtList.indexOf(i) >= 0) status = 2;

				localList[i].push(status);
			}

			return localList;
		}
	});
}

Pokedex.addPokedex = addPokedex;
Pokedex.seePokemon = seePokemon;
Pokedex.catchPokemon = catchPokemon;
Pokedex.dumpPokedex = dumpPokedex;

module.exports = Pokedex;