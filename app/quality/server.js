var express = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var jsonfile   = require('jsonfile');
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
app.use(express.static('app'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// *********** quality router path*************
var quality_parameter_routes = require('./app/router/quality_parameter_router');
quality_parameter_routes(app);
// // ************quality auto*
// var quality_parameter_auto_routes = require('./app/router/quality_parameter_auto_router');
// quality_parameter_auto_routes(app);
// ***********quality inspection strategy**********
var quality_parameter_inspection_strategy_routes = require('./app/router/quality_inspection_strategy_router');
quality_parameter_inspection_strategy_routes(app);
// // ***********quality item strategy map**********
// var quality_item_strat_map_routes = require('./app/router/quality_item_strat_map_router');
// quality_item_strat_map_routes(app);
// ***********quality param strategy map**********
// var quality_param_strategy_map_routes = require('./app/router/quality_param_strategy_map_router');
// quality_param_strategy_map_routes(app);
// // ***********update status**********
// var update_status_routes = require('./app/router/update_status_router');
// update_status_routes(app);
// ********update quality range value**************
// var update_quality_range = require('./app/router/update_quality_range_router');
// update_quality_range(app);
// // ******** quality multiple value history**************
var quality_multiple_value_history_router = require('./app/router/quality_multiple_value_history_router');
quality_multiple_value_history_router(app);
// ********quality range history**************
var quality_range_history_router = require('./app/router/quality_parameter_range_history_router');
quality_range_history_router(app);
// ******** quality range router **************
var quality_parameter_multiple_value_router = require('./app/router/quality_parameter_multiple_value_router');
quality_parameter_multiple_value_router(app);
// // ********delete quality multiple value **************
// var delete_quality_multiple_value_route = require('./app/router/delete_quality_multiple_value_router');
// delete_quality_multiple_value_route(app);

// // ************config quality router path*****
// var mapping_quality_parameter_item_model = require('./app/quality_parameter_item_mapping/model/mapping_quality_parameter_item_model');
// var mapping_quality_parameter_item_router = require('./app/router/mapping_quality_parameter_item_router');
// mapping_quality_parameter_item_router(app);
// ***********flag values itemid qualityid mapping************
// var mapping_quality_parameter_value_router = require('./app/router/mapping_quality_parameter_value_router');
// mapping_quality_parameter_value_router(app);
//
// ************quality parameter range**********
var quality_parameter_range_router = require('./app/router/quality_parameter_range_router');
quality_parameter_range_router(app);

// ************item quality testing**********
var item_quality_testing_router = require('./app/router/item_quality_testing_router');
item_quality_testing_router(app);

// ************od inward reg**********
var inward_reg_router = require('./app/router/inward_reg_router');
inward_reg_router(app);

// ************quality item  result**********
var quality_item_result_router = require('./app/router/quality_item_result_router');
quality_item_result_router(app);

// ************item details router**********
var item_details_router = require('./app/router/item_details_router');
item_details_router(app);
// ************item details router**********
var unit_of_measure_name_router = require('./app/router/unit_of_measure_name_router');
unit_of_measure_name_router(app);

// ************quality inward reg  router**********
var qulty_inward_reg_router = require('./app/router/qulty_inward_reg_router');
qulty_inward_reg_router(app);

// ************quality inward reg  router**********
var item_quality_strategy_router = require('./app/router/item_quality_strategy_router');
item_quality_strategy_router(app);


// var mapping_quality_parameter_toggle_router = require('./app/router/mapping_quality_parameter_toggle_router');
// mapping_quality_parameter_toggle_router(app);

// *************modified quality parameter**********
// var quality_parameter_multiple_value_router = require('./app/router/quality_parameter_multiple_value_router');
// quality_parameter_multiple_value_router(app);
//
// var quality_parameter_range_value_router = require('./app/router/quality_parameter_range_value_router');
// quality_parameter_range_value_router(app);

app.listen(port);

console.log('Node Dev RESTful API server started on: ' + port);
