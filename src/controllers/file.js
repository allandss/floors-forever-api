const FileModel = require('../models/File');					

module.exports = {

	async create(req, res, next) {
    console.log(req.file);
    const { originalname: name, filename: path } = req.file;

		FileModel.create({ name, path }, function (err, response) {
			if (err) 
				next(err);
			else
				res.json(response);
		});
  },
  getAll: function(req, res, next) {
		FileModel.find({}, function(err, response){
			if (err){
				next(err);
			} else{
				res.json(response);
			}
		});
	},

}