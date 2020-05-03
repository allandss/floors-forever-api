const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    path: {
        type: String,
        required: true
    }

});

const File = mongoose.model('File', fileSchema)

module.exports = File;