var express = require("express");
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var multer = require("multer");
var upload = multer();


var mongoose = require('mongoose');

var passport = require('passport');
var session = require('express-session');

var flash = require('connect-flash');
// var morgan = require('morgan');

var port = process.env.PORT || 6220;
app.listen(port);

app.use(express.static('public'));
app.use(session());

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(upload.array());

app.use(morgan('dev'));
app.use(flash());


var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://vduy6220:duy626202@ds034677.mlab.com:34677/vduy6220';

// Connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:');
	} else {
		console.log('Connected.....');
	}

	var collection = db.db();


	var account = collection.collection("account");
// register
	app.post("/register", function(req,res){
		var user = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password,
		};
		account.insert([user],function(err,result){
			if (err) {
				res.send("Sign up has fail!");
			} else {
				res.send("Sign up is successful!")
			}
		})
	});
// login
	app.get

});