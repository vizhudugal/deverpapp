var express    = require("express");
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var jsonfile   = require('jsonfile');
var app        = express();

var session       = require('express-session');
var cookieParser  = require('cookie-parser');
var passport      = require('passport');
var flash         = require('connect-flash');
var morgan        = require('morgan');

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
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// required for passport
app.use(session({secret: 'vidyapathaisalwaysrunning',resave: true,saveUninitialized: true} )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

var engine = require('consolidate');

app.engine('html', engine.mustache);
app.set('view engine', 'html');
 app.set('view engine', 'ejs'); // set up ejs for templating

require('./app/hr/app/model/passport')(passport); // pass passport for configuration
// routes ======================================================================
// load our routes and pass in our app and fully configured passport
require('./app/hr/app/router/login_router.js')(app, passport);

// require('./config/passport')(passport); // pass passport for configuration
// var authRoutes = require('./router/authRoutes')(passport);
// app.use('/auth', authRoutes);

var employeeRouter = require('./app/hr/app/router/employee_router.js');
employeeRouter(app);

var departmentRouter = require('./app/hr/app/router/department_router.js');
departmentRouter(app);

var mappingRouter = require('./app/hr/app/router/mapping_router.js');
mappingRouter(app);

var roleRouter = require('./app/hr/app/router/role_router.js');
roleRouter(app);

var procurementRouter = require('./app/procurement/app/router/procurement_router.js');
procurementRouter(app);

var grnRouter = require('./app/grn/app/router/grn_router.js');
grnRouter(app);

var securityRouter = require('./app/call-security-card/app/router/security_router.js');
securityRouter(app);

var codeRouter = require('./app/hr/app/router/code_router.js');
codeRouter(app);

var itemDetailsRouter = require('./app/item/app/router/item_details_router.js');
itemDetailsRouter(app);

var storesRouter = require('./app/warehouse/app/router/stores_router.js');
storesRouter(app);

// ***************QUALITY ROUTERS***********
 // **********quality_parameter_router************
 var quality_parameter_router = require('./app/quality/app/router/quality_parameter_router');
 quality_parameter_router(app);

 // **********quality_parameter_router************
 var inward_reg_router = require('./app/quality/app/router/inward_reg_router');
 inward_reg_router(app);

 // **********quality_parameter_router************
 var item_details_router = require('./app/quality/app/router/item_details_router');
 item_details_router(app);

 // **********quality_parameter_router************
 var item_quality_testing_router = require('./app/quality/app/router/item_quality_testing_router');
 item_quality_testing_router(app);

 // **********quality_parameter_router************
 var quality_inspection_strategy_router = require('./app/quality/app/router/quality_inspection_strategy_router');
 quality_inspection_strategy_router(app);

 // **********quality_parameter_router************
 var quality_item_result_router = require('./app/quality/app/router/quality_item_result_router');
 quality_item_result_router(app);

 // **********quality_parameter_router************
 var quality_multiple_value_history_router = require('./app/quality/app/router/quality_multiple_value_history_router');
 quality_multiple_value_history_router(app);

 // **********quality_parameter_router************
 var quality_parameter_multiple_value_router = require('./app/quality/app/router/quality_parameter_multiple_value_router');
 quality_parameter_multiple_value_router(app);

 // **********quality_parameter_router************
 var quality_parameter_range_history_router = require('./app/quality/app/router/quality_parameter_range_history_router');
 quality_parameter_range_history_router(app);

 // **********quality_parameter_router************
 var quality_parameter_range_router = require('./app/quality/app/router/quality_parameter_range_router');
 quality_parameter_range_router(app);

 // **********quality_parameter_router************
 var unit_of_measure_name_router = require('./app/quality/app/router/unit_of_measure_name_router');
 unit_of_measure_name_router(app);

 // **********quality_parameter_router************
 var quality_security_rejected_router = require('./app/quality/app/router/quality_security_rejected_router');
 quality_security_rejected_router(app);

 // ************quality inward reg  router**********
 var quality_inward_reg_router = require('./app/quality/app/router/quality_inward_reg_router');
 quality_inward_reg_router(app);

 // ************item quality strategy  router**********
 var item_quality_strategy_router = require('./app/quality/app/router/item_quality_strategy_router');
 item_quality_strategy_router(app);
 // ************Inward register router**********
 var inward_register_router = require('./app/quality/app/router/inward_reg_router');
 inward_register_router(app);

 // ************quality security rejected**********
 var quality_security_rejected_route = require('./app/quality/app/router/quality_security_rejected_router');
 quality_security_rejected_route(app);

 var customer_routes = require('./app/sales/app/router/customer_router');
 customer_routes(app);

 var salesorder_routes = require('./app/sales/app/router/salesorder_router');
 salesorder_routes(app);

 var item_details_routes = require('./app/sales/app/router/item_details_router');
 item_details_routes(app);
