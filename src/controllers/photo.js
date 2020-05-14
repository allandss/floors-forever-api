const PhotoModel = require('../models/Photo');					

module.exports = {
	getById: function(req, res, next) {
		PhotoModel.findById(req.params.id, function(err, response){
			if (err) {
				next(err);
			} else {
				res.json({photo: response});
			}
		});
	},

	getAll: function(req, res, next) {
		PhotoModel.find({}, function(err, response){
			if (err){
				next(err);
			} else{
				res.json({photos : response});
			}
		});
	},

	async updateById(req, res, next) {
		PhotoModel.findByIdAndUpdate(req.params.id, {name:req.body.name, image: req.body.image }, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "photo updated successfully!!!", id: response.id});
			}
		});
	},

	deleteById(req, res, next) {
		PhotoModel.findByIdAndRemove(req.params.id, function(err, response){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "photo deleted successfully!!!", data: response});
			}
		});
	},

	async create(req, res, next) {

		PhotoModel.create({ name: req.body.name, image: req.body.image }, function (err, response) {
			if (err) 
				next(err);
			else
				res.json({status: "success", message: "photo added successfully!!!", data: response});
		});
	}

}