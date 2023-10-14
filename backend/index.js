const express = require('express');

// const hbs = require('hbs');
const mongoose = require("mongoose");

require("dotenv").config();

const cors = require("cors");

const fs = require('fs');

const routes = require('./routes/routes.js');

const db = require('./models/db.js');

const app = express();

const port = process.env.PORT | 4000;

// app.set('view engine', 'hbs');

// hbs.registerPartials(__dirname + '/views/partials');

// hbs.registerPartial('header', fs.readFileSync(__dirname + '/views/partials/header.hbs', 'utf8'));

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/', routes);

app.use(function (req, res) {
    res.render('error');
});

db.connect();

app.listen(port, function(){
    console.log('Server running at: ');
    console.log('app listening at port ' + port);
});