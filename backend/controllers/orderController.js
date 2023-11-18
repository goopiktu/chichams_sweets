const db = require('../models/db.js');

const Order = require('../models/OrderModel.js');

const Product = require('../models/ProductModel.js');

const moment = require('moment-timezone');

const orderController = {
    getOrder: function(req, res){
        res.render('order');
    },

    postOrder: async function(req, res){
        const formData = req.body;

        const newOrder = new Order(formData);

        console.log(newOrder);

        newOrder.save()
            .then((savedOrder) => {
                res.status(201).json(savedOrder);
            })
            .catch((error) => {
                res.status(500).json({ error: 'An error occurred: ' + error });
            });
    },

    checkDate: async function(req, res){
        const date_query = req.query.param;

        const count = await Order.countDocuments({dateOrdered: date_query});

        res.json({count: count});
    },

    getProducts: async function(req, res){
        const products = await Product.find();

        console.log(products);

        res.json(products);
    },

    getImage: async function(req, res){
        const query = req.params.productName;

        console.log(query);

        const document = await Product.findOne({name: query});

        res.json(document);
    },

    deleteOrders: async function(req, res){
        try{
            await Order.deleteMany({});
        } catch(err){
            console.log('Deleting Orders Failed: ', err);
        }
    }
}

module.exports = orderController;