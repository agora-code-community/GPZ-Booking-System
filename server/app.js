var express = require('express');
var mongoose = require('mongoose');
var passport = require ('passport');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

var app = express();
var port = process.env.PORT || 8080;

var databaseConfig = require('./config/database');
var router = require('./app/routes');

mongoose.connect(databaseConfig.url, {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({'extended':'true'})); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(methodOverride());
app.use(cors());

//
app.get("/", function(req, res){
  res.send("Invalid endpoint...");
});

//Start server
app.listen(port, function(){
    console.log("App server is listening on port " +port+ "...");
});

router(app);
