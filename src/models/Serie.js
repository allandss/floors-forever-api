const mongoose = require('mongoose')

const serieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
		type: String,
		required: true,
		trim: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

const Serie = mongoose.model('Serie', serieSchema)

module.exports = Serie;