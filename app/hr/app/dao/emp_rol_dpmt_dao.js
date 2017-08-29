'use strict';

var emp_rol_dpmt_model = require('../model/emp_rol_dpmt_model.js');
var bookshelf = require('../model/database');
var emp_rol_dpmt_model_new = bookshelf.model('md_hr_emp_rol_dpmt_model');

exports.create_emp_rol_dpmt_dao_fn = function(emp_rol_dpmt, res, result){
  emp_rol_dpmt_model_new.forge({
                  employee_id: emp_rol_dpmt.employee_id_value,
                  role_id: emp_rol_dpmt.role_id_value,
                  department_id: emp_rol_dpmt.department_id_value,
                  created_on:emp_rol_dpmt.created_on_value,
                  updated_on:emp_rol_dpmt.updated_on_value,
                  created_by:emp_rol_dpmt.created_by_value,
                  updated_by:emp_rol_dpmt.updated_by_value,
                  status:emp_rol_dpmt.status_value
                }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
      result(err);
  });
}

exports.fetch_emp_rol_dpmt_dao_fn = function(req,res,result){
  emp_rol_dpmt_model_new.forge({employee_id:req.employee_id}).fetch()
  .then (function (status) {
      result(status)
  })
  .catch(function (err) {
    result(err)
  });
}
