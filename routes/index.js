
var mongoose = require('mongoose');

/*
 * GET home page.
 */

exports.index = function(req, res){
  if(req.user) res.redirect('/map');
  else res.redirect('/login.html');
};
exports.login = function(req, res) {
	if(!mongoose.connection.readyState){
		mongoose.connect('mongodb://localhost/tempest');
	}
	res.redirect('/map.html');
}
exports.map = function(req, res) {
	if(!req.user) res.redirect('/login.html');
	else res.render('map');
}