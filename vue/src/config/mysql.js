module.exports = function (mysql){
	var client = mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"1234",
		port:3306,
		database:"rumblefish"
	});
	client.connect();
	return client;
}
