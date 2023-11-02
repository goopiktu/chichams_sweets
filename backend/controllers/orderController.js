const db = require('../models/db.js');

const Order = require('../models/OrderModel.js');

const orderController = {
    getOrder: function(req, res){
        res.render('order');
    },

    postOrder: async function(req, res){
        const formData = req.body;

        const newOrder = new Order(formData);

        newOrder.save()
            .then((savedOrder) => {
                res.status(201).json(savedOrder);
            })
            .catch((error) => {
                res.status(500).json({ error: 'An error occurred' });
            });
    }
}

module.exports = orderController;