
var mongoose = require('mongoose');

/*
 * GET home page.
 */

exports.index = function(req, res){
  if(!req.user) res.redirect('/login.html');
  else res.redirect('/map');
};
exports.login = function(req, res) {
	if(!mongoose.connection.readyState){
		mongoose.connect('mongodb://localhost/tempest');
	}
	res.redirect('/map');
}
exports.map = function(req, res) {
	if(!req.user) res.redirect('/login.html');
	else res.render('map');
}