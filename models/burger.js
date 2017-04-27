var orm = require("../config/orm.js");


var burgerOp = {
	all: function() {
		orm.selectAll();
		},

	insert: function(burger){
		orm.insertOne(burger);
		},

	update: function (burguer, boolean){
		orm.updateOne(burguer, boolean);
		}
};
module.exports = burguerOp;


