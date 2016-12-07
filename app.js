var express = require('express'),
app = express(),
util = require('util');

app.path = path = require('path');
app.jsHandler = jsHandler = '';

// app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
// app.use(express.static(path.join(__dirname, '/public')));
// var server = app.listen(7001, function () {
// 	console.log('Server is running on  ' + server.address().address + ':' + server.address().port);
// });

// Common app config
app.configure(function() {
	app.use(express.urlencoded({
		limit: '10mb'
	}));

	app.use(express.json());

	app.use(express.methodOverride());
	app.use(express.cookieParser('lbajobs'));

	app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
	app.use(express.static(path.join(__dirname, '/public')));
	
	/*
		Starting app
	*/
	var server = app.listen(7001, function () {
		console.log('Server is running on  ' + server.address().address + ':' + server.address().port);
	});
});
