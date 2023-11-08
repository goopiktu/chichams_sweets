const db = require('../models/db.js');

const Order = require('../models/OrderModel.js');

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
    }
}

module.exports = orderController;