const express = require("express");
const mysql = require("mysql");
var client = require("../config/mysql.js")(mysql);
router = express.Router();
router.get("/register", function(req, res, next) {
	client.query("select * from rumblefish where userName=?", [req.query.userName], function(err, result) {
		if(result.length > 0) {
			res.jsonp("no");
			return;
		} else {
			console.log(req.query)
			client.query("insert into rumblefish set userName=?,passWord=?", [req.query.userName, req.query.passWord], function(err, result1) {
				res.jsonp("ok")
			});
		}
	})

});

module.exports = router;