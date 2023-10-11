const db = require('../models/db.js');

const Order = require('../models/OrderModel.js');

const orderController = {
    getOrder: function(req, res){
        res.render('order');
    },

    postOrder: async function(req, res){
        var fname = req.body.fname;
        var lname = req.body.lname;
        var contact = req.body.contactNo;
        var mode = req.body.mode;
        var date = req.body.deliveryDate;

        var order = {
            fname: fname,
            lname: lname,
            contactNo: contact,
            dateOrdered: date,
            mode: mode
        }

        var all_order = await db.findMany(Order, {});

        try{
            await db.insertOne(Order, order);

            console.log(all_order);
        } catch(error){
            console.error('Error inserting document: ', error);
        }

        res.redirect('/');
    }
}

module.exports = orderController;