var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    //TODO: Add pictures using Buffer 

    // picture: {
    //     type: Buffer,
    //     required: true
    // },

    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema, 'products');