
var login = require('../routers/login.js');
var register = require('../routers/register.js');
module.exports = function (app){
	app.get('/login',login)
	app.get('/register',register)
}
