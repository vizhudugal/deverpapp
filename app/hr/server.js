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

require('./app/model/passport')(passport); // pass passport for configuration
// routes ======================================================================
// load our routes and pass in our app and fully configured passport
require('./app/router/login_router.js')(app, passport);

// require('./app/config/passport')(passport); // pass passport for configuration
// var authRoutes = require('./app/router/authRoutes')(passport);


var employeeRouter = require('./app/router/employee_router.js');
employeeRouter(app);

var departmentRouter = require('./app/router/department_router.js');
 departmentRouter(app);

 var mappingRouter = require('./app/router/mapping_router.js');
 mappingRouter(app);

 var roleRouter = require('./app/router/role_router.js');
 roleRouter(app);

 var codeRouter = require('./app/router/code_router.js');
 codeRouter(app);
