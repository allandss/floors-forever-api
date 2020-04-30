const CategoryModel = require('../models/Category');					

module.exports = {
	getById: function(req, res, next) {
		CategoryModel.findById(req.params.id, function(err, response){
			if (err) {
				next(err);
			} else {
				res.json({category: response});
			}
		});
	},

	getAll: function(req, res, next) {
		let categoryList = [];

		CategoryModel.find({}, function(err, response){
			if (err){
				next(err);
			} else{
				for (let category of response) {
					categoryList.push({id: category._id, name: category.name, description: category.description, image: category.image});
				}
				res.json({categories : response});
			}
		});
	},

	async updateById(req, res, next) {
		CategoryModel.findByIdAndUpdate(req.params.id,{name:req.body.name, description:req.body.description, image: req.body.image }, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "category updated successfully!!!", id: response.id});
			}
		});
	},

	deleteById(req, res, next) {
		CategoryModel.findByIdAndRemove(req.params.id, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "category deleted successfully!!!", data: response});
			}
		});
	},

	async create(req, res, next) {

		CategoryModel.create({ name: req.body.name, description: req.body.description, image: req.body.image }, function (err, response) {
			if (err) 
				next(err);
			else
				res.json({status: "success", message: "category added successfully!!!", data: response});
		});
	}

}