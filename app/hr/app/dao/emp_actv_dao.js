'use strict';


var emp_actv_model = require('../model/emp_actv_model.js');
var bookshelf = require('../model/database');
var emp_actv_model_new = bookshelf.model('od_hr_emp_actv_model');

exports.login_emp_actv_dao_fn = function(emp_actv, res, result){
  emp_actv_model_new.forge({
                  employee_id: emp_actv.employee_id,
                  logged_on: emp_actv.logindatetime,
                  logged_off: emp_actv.logoutdatetime,
                  created_on:null,
                  updated_on:null,
                  created_by:emp_actv.created_by_value,
                  updated_by:emp_actv.updated_by_value,
                  status:emp_actv.status_value
                }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
      result(err);
  });
}

exports.logout_emp_actv_dao_fn = function(req, res, result){
 bookshelf.knex('od_hr_employee_activity')
  .where({'employee_id': req.employee_id , 'logged_off': "null"} )
  .update({logged_off: req.logoutdatetime,thisKeyIsSkipped: undefined}) .then (function (status) {
         result(status)
     })
     .catch(function (err) {
         result(err)
     });
}
