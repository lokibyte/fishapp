var models = require('../models/model.js');



exports.test = function(req,res)
{
	models.test([], function(obj){
		res.json(obj);
	},function(obj){
		res.json(obj);
	})
		
}

exports.products = function(req,res){
	models.getProducts([], function(obj){
		res.json(obj);
	},function(obj){
		res.json(obj);
	});
}

exports.categories = function(req,res){
	models.getCategories([], function(obj){
		res.json(obj);
	},function(obj){
		res.json(obj);
	});
}

exports.coupons = function(req,res){
	models.getcoupons([], function(obj){
		res.json(obj);
	},function(obj){
		res.json(obj);
	});
}

exports.orders = function(req,res){
	models.getOrders([], function(obj){
		res.json(obj);
	},function(obj){
		res.json(obj);
	});
}
