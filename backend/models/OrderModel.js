var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },

    contactNo: {
        type: Number,
        required: true
    }, 
    dateOrdered: {
        type: Date,
        required: true
    },

    mode: {
        type: String,
        enum: ['Deliver', 'Pick-up'],
        default: 'Pick-up',
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);