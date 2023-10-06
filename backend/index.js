const express = require('express');

const hbs = require('hbs');

const fs = require('fs');

const routes = require('./routes/routes.js');

const db = require('./models/db.js');

const app = express();

const port = 9090;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerPartial('header', fs.readFileSync(__dirname + '/views/partials/header.hbs', 'utf8'));

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/', routes);

app.use(function (req, res) {
    res.render('error');
});

db.connect();

app.listen(port, function(){
    console.log('Server running at: ');
    console.log('http://' + '127.0.0.1' + ':' + port);
});