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

	create: function(val, cb){
		queryString = "INSERT INTO burgers SET ?"
		connection.query(queryString, {burger_name:val, devoured:false}, function(err, result){
			if(err) throw err;
			cb(result);
		})
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
