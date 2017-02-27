const express = require("express");
const mysql = require("mysql");
var client = require("../config/mysql.js")(mysql);
router = express.Router();
router.get('/login', function(req, res, next) {
	var sql = "",arr=[];
	if(req.query.userName && req.query.passWord) {
		  sql = "select * from rumblefish where userName=? and passWord=?";
		  arr = [req.query.userName, req.query.passWord]
	}
	client.query(sql, arr, function(err, result) {
		if(result.length > 0) {
			delete result[0].userName;
			delete result[0].passWord;
			result[0].code = 1;
			res.jsonp(result)
		} else {
			res.jsonp(0)
		}
	})
});

module.exports = router;