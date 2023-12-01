var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    email: {
        type: String
    },

    contactNo: {
        type: String,
    },

    fbLink: {
        type: String,
    },

    address: {
        type: String
    }
});

module.exports = mongoose.model('Contact', ContactSchema, 'contacts');
