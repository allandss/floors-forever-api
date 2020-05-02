const SerieModel = require('../models/Serie');					

module.exports = {
	getById: function(req, res, next) {
		SerieModel.findById(req.params.id, function(err, response){
			if (err) {
				next(err);
			} else {
				res.json({serie: response});
			}
		});
	},

	getAll: function(req, res, next) {
		let serieList = [];

		SerieModel.find({}, function(err, response){
			if (err){
				next(err);
			} else{
				for (let serie of response) {
					serieList.push({id: serie._id, name: serie.name, description: serie.description, image: serie.image, category: req.body.category });
				}
				res.json({series : response});
			}
		});
	},

	async updateById(req, res, next) {
		SerieModel.findByIdAndUpdate(req.params.id,{name:req.body.name, description:req.body.description, image: req.body.image, category: req.body.category }, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "serie updated successfully!!!", id: response.id});
			}
		});
	},

	deleteById(req, res, next) {
		SerieModel.findByIdAndRemove(req.params.id, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "serie deleted successfully!!!", data: response});
			}
		});
	},

	async create(req, res, next) {

		SerieModel.create({ name: req.body.name, description: req.body.description, image: req.body.image, category: req.body.category }, function (err, response) {
			if (err) 
				next(err);
			else
				res.json({status: "success", message: "serie added successfully!!!", data: response});
		});
	},

	getByCategory: function(req, res, next) {
		let serieList = [];
		console.log(req.params.id);
		SerieModel.find({'category': req.params.id}, function(err, response){
			if (err){
				next(err);
			} else{
				for (let product of response) {
					serieList.push({id: product._id, name: product.name, description: product.description, image: product.image, category: product.category });
				}
				res.json({serie : response});
			}
		});
	},

}