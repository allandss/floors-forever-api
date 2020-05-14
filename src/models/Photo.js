const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    }

});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo