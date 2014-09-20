var spawn = function(email, lng, lat, socket) {
	// don't care what it is, spawn Pikachu

	var newPokemon = {
		pid: 24,
		level: 10,
		moveset: ['Tackle', 'Growl', 'Thunderbolt', 'Hyper Beam']
	}

	socket.emit('spawnPokemon', { pokemon: newPokemon });
}

module.exports.spawn = spawn;