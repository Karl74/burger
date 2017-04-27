var express = require("express");

var app = express();

var burguerOp = require("../models/burguer.js");

var router = express.Router();

router.get("/", function(req, res){
	burguerOp.all(function(data){
		var hbsObject = {
			hamburguers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});


module.exports = router;