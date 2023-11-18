const express = require('express');

const controller = require('../controllers/controller.js');

// add more controllers here

const orderController = require('../controllers/orderController.js');

const app = express();

app.get('/favicon.ico', controller.getFavicon);

app.get('/', controller.getIndex);

// add more routes here

app.get('/order', orderController.getOrder);

app.post('/postOrder', orderController.postOrder);

app.get('/checkDate', orderController.checkDate);

app.get('/getProducts', orderController.getProducts);

app.get('/getImage/:productName', orderController.getImage);

app.get('/deleteOrders', orderController.deleteOrders);

module.exports = app;