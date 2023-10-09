const mongoose = require('mongoose');

const Order = require('./OrderModel.js');

const url = 'mongodb+srv://chichams:9KvfdWyPgHC6sGkP@chichams-sweets.xanauwx.mongodb.net/?retryWrites=true&w=majority';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const database = {
    connect: async function() {
        try {
            await mongoose.connect(url, options);
            console.log('Connected to: ' + url);
        } catch (error) {
            console.error('Error connecting to database:', error);
        }
    },

    insertOne: async function(model, doc) {
        return await model.create(doc);
    },

    insertMany: async function(model, docs) {
        return await model.insertMany(docs);
    },

    findOne: async function(model, query, projection){
        return await model.findOne(query, projection);
    },

    findMany: async function(model, query, projection){
        return await model.find(query, projection);
    },

    updateOne: async function(model, filter, update){
        return await model.updateOne(filter, update);
    },

    updateMany: async function(model, filter, update){
        return await model.updateMany(filter, update);
    },

    deleteOne: async function(model, conditions) {
        return await model.deleteOne(conditions);
    },

    deleteMany: async function(model, conditions) {
        return await model.deleteMany(conditions);
    }
};

module.exports = database;