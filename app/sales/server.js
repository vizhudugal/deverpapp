/*var express = require('express'),
app = express(),
port = process.env.PORT || 4000;
app.listen(port);
console.log('Node Dev RESTful API server started on: ' + port);
*/
var express = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var jsonfile   = require('jsonfile');
// var flatMap = require('lodash.flatmap');

  app = express();
  var urlencodedParser = bodyParser.urlencoded({ extended: false });
var connection;
// var connectdb=require("./app/script/connectdb.js");
  require('fs').readFile('./app/config/getconnection.json','utf8',function(err,data){
    dbjson=JSON.parse(data);
    global.connection=mysql.createConnection({
      host:dbjson[0].host,
      port:dbjson[0].port,
      user:dbjson[0].user,
      password:dbjson[0].password,
      database:dbjson[0].database
    });
    global.connection.connect(function(err){
      if(!err){
        console.log("Connected with database");
      }
      else {
        console.log("Failed to connect with database!");
      }
    });
  });
  app.use(express.static('app'));

  app.get('/' ,function (req, res) {
    res.sendFile( "app/index.html" );
  });
  port = process.env.PORT || 4000,

  // mongoose = require('mongoose'),
  // Task = require('./api/models/nodeDevModel'),
  // Test = require('./api/models/testmodel'),



//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb');

app.use(express.static('app'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// addressModel = require('./app/model/address_model');

// var routes = require('./api/routes/nodeDevRoutes');
var customer_routes = require('./app/router/customer_router');
customer_routes(app);
var salesorder_routes = require('./app/router/salesorder_router');
salesorder_routes(app);
var item_details_routes = require('./app/router/item_details_router');
item_details_routes(app);



app.listen(port);


console.log('Node Dev RESTful API server started on: ' + port);
