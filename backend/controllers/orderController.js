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

        const date = moment(formData.datePickup).tz('Asia/Shanghai');

        console.log(date);

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
        const orders = await db.findMany(Order, {});

        // console.log(date_query);
        // console.log(await db.findOne(Order, {datePickup: date_query}))

        // console.log(await Order.countDocuments({datePickup: date_query}));

        //TODO: return count the current date
        // await Order.countDocuments({datePickup: date_query}, (err, count) => {
        //     if(err){
        //         console.error(err);
        //     } else {
        //         res.json({count});
        //     }
        // })
    },

    getProducts: async function(req, res) {
        fetch('http://localhost:4000/postProduct', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify('')
        }).then((response) => {
            if(response.ok){
                console.log('Successfully inserted one document');
            } else {
                console.log('Insert one document failed');
            }
        }).catch((err) => {
            console.log(err);
        })
    },

    postProducts: async function(req, res) {
        //TODO: Create Products
        var caramel = new Product({
            name: 'Caramel Bars',
            price: 270
        });

        var brownies = new Product({
            name: 'Brownies',
            price: 270
        });

        var soft_icing = new Product({
            name: 'Soft Icing Customized Cake',
            price: 1500
        });

        var buttercream = new Product({
            name: 'Buttercream Customized Cake',
            price: 1500
        });

        var fondant = new Product ({
            name: 'Fondant Customized Cake',
            price: 2500
        });

        var creamy_caramel = new Product ({
            name: 'Creamy Caramel Cake',
            price: 1800
        });

        var crinkles = new Product ({
            name: 'Chewy Crinkles',
            price: 200
        });


        caramel.save()
            .then((savedProduct) => {
                res.status(201).json(savedProduct);
            })
            .catch((error) => {
                res.status(500).json({error: 'An error occured'});
            });

        brownies.save()
            .then((savedProduct) => {
                res.status(201).json(savedProduct);
            })
            .catch((error) => {
                res.status(500).json({error: 'An error occured'});
            });

        soft_icing.save()
            .then((savedProduct) => {
                res.status(201).json(savedProduct);
            })
            .catch((error) => {
                res.status(500).json({error: 'An error occured'});
            });

        buttercream.save()
            .then((savedProduct) => {
                res.status(201).json(savedProduct);
            })
            .catch((error) => {
                res.status(500).json({error: 'An error occured'});
            });
        
        fondant.save()
            .then((savedProduct) => {
                res.status(201).json(savedProduct);
            })
            .catch((error) => {
                res.status(500).json({error: 'An error occured'});
            });

        creamy_caramel.save()
            .then((savedProduct) => {
                res.status(201).json(savedProduct);
            })
            .catch((error) => {
                res.status(500).json({error: 'An error occured'});
            });

        crinkles.save()
            .then((savedProduct) => {
                res.status(201).json(savedProduct);
            })
            .catch((error) => {
                res.status(500).json({error: 'An error occured'});
            });
    }
}

module.exports = orderController;