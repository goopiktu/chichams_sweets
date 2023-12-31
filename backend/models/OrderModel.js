var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
   
    contactNo: {
        type: String,
        required: true
    }, 

    email: {
        type: String,
        required: true
    },

    fbLink: {
        type: String,
        required: true
    },

    mode: {
        type: String,
        enum: ['Delivery by Grab/Lalamove', 'Pick-up', 'Delivery by Client'],
        default: 'Pick-up',
        required: true
    },

    dedication: {
        type: String,
        default: 'None'
    },

    orderDes: {
        type: String,
        default: 'None',
        // required: true
    },

    orderNum: {
        type: String,
        default: 'Unknown Order',
        required: true,
    },

    address: {
        type: String,
        default: 'Pick-Up'
    },

    dateOrdered: {
        type: String,
        // default: Date.now,
        required: true  
    },

    datePickup: {
        type: Date,
        default: Date.now,
        // required: true
    },

    img: {
        type: String
    },

    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected', 'Completed'],
        default: 'Pending',
        required: true
    }

});

module.exports = mongoose.model('Order', OrderSchema, 'orders');