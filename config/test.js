var connection = require("../config/connection.js");
var boolean = true;
var id = 3; 
queryString = "UPDATE burgers SET ? WHERE ?";
connection.query(queryString, [{devoured:boolean}, {id: id}]);




router.get("/", function(req, res){
	burguerOp.all(function(data){
		var hbsObject = {
			hamburgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});