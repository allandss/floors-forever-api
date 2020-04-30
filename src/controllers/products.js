const ProductModel = require('../models/Product');					

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
					productsList.push({id: product._id, name: product.name, description: product.description, image: product.image, category: product.category, colors: product.colors });
				}
				res.json({products : response});
			}
		});
	},

	getByCategory: function(req, res, next) {
		let productsList = [];

		ProductModel.find({'id': req.body.id}, function(err, response){
			if (err){
				next(err);
			} else{
				for (let product of response) {
					productsList.push({id: product._id, name: product.name, description: product.description, image: product.image, category: product.category, colors: product.colors });
				}
				res.json({products : response});
			}
		});
	},

	async updateById(req, res, next) {
		ProductModel.findByIdAndUpdate(req.params.id,{name:req.body.name, description:req.body.description, image: req.body.image, category: req.body.category, colors: req.body.colors }, function(err, response){
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

		ProductModel.create({ name: req.body.name, description: req.body.description, image: req.body.image, category: req.body.category, colors: req.body.colors }, function (err, response) {
			if (err) 
				next(err);
			else
				res.json({status: "success", message: "product added successfully!!!", data: response});
		});
	}

}