var express    = require("express");
var mongoose    = require("mongoose");
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var jsonfile   = require('jsonfile');
var app = express();
var server=app.listen(4000,'127.0.0.1',function(err){
  var host=server.address().address;
  var port=server.address().port;
  if(!err){
    console.log("Listening at http://%s:%s", host, port);
  }
  else {
    console.error(err);
  }
})
app.use(express.static('app'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/' ,function (req, res) {
  res.sendFile( "app/index.html" );
});
var stores_routes = require('./app/router/grn_router.js');
stores_routes(app);
