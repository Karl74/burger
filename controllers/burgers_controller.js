var express = require("express");

// var app = express();
var router = express.Router();

var burguerOp = require("../models/burger.js");


router.get("/", function(req, res){
	burguerOp.all(function(data){
		var hbsObject = {
			hamburgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	
	console.log(req.body);
	
	res.redirect("/");
})


router.put("/update", function(req,res){
	console.log(req.body);
	var id = req.body.id;
	console.log("the params: "+ id);

	burguerOp.update(id, true, function() {
	} );

	res.redirect("/");
	
})


// router.put("/", function(req, res){
// 	burgerOp.update()
// });

module.exports = router;