const db = require('../models/db.js');

const Order = require('../models/OrderModel.js');

const orderController = {
    getOrder: function(req, res){
        res.render('order');
    },

    postOrder: async function(req, res){
        // var fname = req.body.fname;
        // var lname = req.body.lname;
        // var contact = req.body.contactNo;
        // var mode = req.body.mode;
        // var date = req.body.deliveryDate;

        // var order = {
        //     fname: fname,
        //     lname: lname,
        //     contactNo: contact,
        //     dateOrdered: date,
        //     mode: mode
        // }

        // var all_order = await db.findMany(Order, {});

        // try{
        //     await db.insertOne(Order, order);

        //     console.log(all_order);
        // } catch(error){
        //     console.error('Error inserting document: ', error);
        // }

        // res.redirect('/');
        try{
            const { fname, lname, contact, date, mode } = req.body;
            
            const orderForm = new Order({ fname, lname, contact, date, mode });
            
            await db.insertOne(Order, orderForm);

            res.json({ message: 'One document inserted to MongoDB' })
        } catch(error){
            console.error(error);
            res.status(500).json({ message: 'Error inserting one document to MongoDB' });
        }

        res.redirect('/');

    }
}

module.exports = orderController;