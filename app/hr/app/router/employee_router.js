'use strict';
module.exports = function(app) {
  var emp_contr = require('../controller/emp_contr.js');
  var emp_actv_contr = require('../controller/emp_actv_contr.js');
  var fetch_login_contr = require('../controller/fetch_login_contr.js');

  app.route('/addemployee')
  .post(emp_contr.create_emp)

  app.route('/searchemployee')
  .get(emp_contr.fetch_emp)

  app.route('/addemployeecontact')
  .post(emp_contr.create_emp_cont)

  app.route('/searchemployeecontact')
  .get(emp_contr.fetch_emp_cont)

  app.route('/loginemployeeactivity')
  .post(emp_actv_contr.login_emp_actv)

  app.route('/logoutemployeeactivity')
  .post(emp_actv_contr.logout_emp_actv)

  app.route('/loginuser')
  .post(fetch_login_contr.fetch_login)

}
