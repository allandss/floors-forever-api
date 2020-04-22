const ProductModel = require('../models/Product');					
const fs = require('fs');

module.exports = {
	getById: function(req, res, next) {
		ProductModel.findById(req.params.id, function(err, response){
			if (err) {
				next(err);
			} else {
				res.json({products: response});
			}
		});
	},

	getAll: function(req, res, next) {
		let productsList = [];

		ProductModel.find({}, function(err, response){
			if (err){
				next(err);
			} else{
				for (let product of response) {
					productsList.push({id: product._id, name: product.name, description: product.description, image: product.image});
				}
				res.json({products : response});
			}
		});
	},

	async updateById(req, res, next) {
		ProductModel.findByIdAndUpdate(req.params.id,{name:req.body.name, description:req.body.description, image: req.body.image }, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "product updated successfully!!!", id: response.id});
			}
		});
	},

	deleteById(req, res, next) {
		ProductModel.findByIdAndRemove(req.params.id, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "product deleted successfully!!!", data: response});
			}
		});
	},

	async create(req, res, next) {

		ProductModel.create({ name: req.body.name, description: req.body.description, image: req.body.image }, function (err, response) {
			if (err) 
				next(err);
			else
				res.json({status: "success", message: "product added successfully!!!", data: response});
		});
	}

}