const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
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
    image: {
        type: String,
        required: true
    }

});

const Product = mongoose.model('Product', productSchema)

module.exports = Product