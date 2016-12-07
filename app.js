var express = require('express'),
app = express(),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
util = require('util'),
mongoose = require('mongoose');

app.path = path = require('path');
app.jsHandler = jsHandler = '';

mongoose.connect('mongodb://test:test@ds119568.mlab.com:19568/labelleassiettedb');

// Common app config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	limit: '10mb',
	extended: true
}));

app.use(methodOverride());
app.use(cookieParser('lbajobs'));

app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/public')));

var router = require('./routes/index');
app.use('/api', router);
	

module.exports = app;