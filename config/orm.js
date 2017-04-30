var connection = require("../config/connection.js");
//why is ../ instead of ./ Both are on the same dierectory???

var orm = {
	selectAll: function (cb){
		var queryString = "SELECT * FROM burgers;";
		// DO I NEED TO INCLUDE + ";" ??????????

		connection.query(queryString, function(err, result){
			if(err){
			throw err;
			}
			console.log(result);
			cb(result);
		});
	},

	insertOne: function(burger){
		queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ?,?";
		connection.query(queryString, [burger, false], function(err, result){
			if(err){
				throw err;
			}
			console.log("Ther is a new burger");
		});
	}, 

	updateOne: function(id, boolean,cb){
		queryString = "UPDATE burgers SET ? WHERE ?";
		connection.query(queryString, [{devoured: boolean}, {id: id}],function(err, result){
			if(err){
				throw err;
			}
			console.log(result);
			// cb(result);
		});
	}

}; // END OF THE ORM OBJECT

module.exports = orm;