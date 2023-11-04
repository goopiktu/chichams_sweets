var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    picture: {
        type: Buffer,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema, 'products');