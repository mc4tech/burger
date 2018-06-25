var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	create: function(name, cb) {
		orm.create("burgers", [
			"burger_name", "devoured"
		], [
			name, false
		], cb);
	},
	update: function(id,devoured, cb) {
		var condition = "id=" + id;
		orm.update("burgers", {
			devoured: devoured
		}, condition, cb);
	}
};

module.exports = burger;
