var orm = require("../config/orm.js");


var burgerOp = {
	all: function(cb) {
		orm.selectAll(function(res){
			cb(res);
		});
		},

	insert: function(burger){
		orm.insertOne(burger);
		},

	update: function (id, boolean, cb){
		orm.updateOne(id, boolean);
		// cb(res);
		}
};
module.exports = burgerOp;

		

