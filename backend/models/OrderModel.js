var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   
    contactNo: {
        type: Number,
        required: true
    }, 

    fbLink: {
        type: String,
        required: true
    },

    mode: {
        type: String,
        enum: ['Deliver', 'Pick-up'],
        default: 'Pick-up',
        required: true
    },

    orderDes: {
        type: String,
        required: true
    },

    address: {
        type: String
    },

    dateOrdered: {
        type: Date,
        default: Date.now,
        required: true  
    },

});

module.exports = mongoose.model('Order', OrderSchema, 'orders');