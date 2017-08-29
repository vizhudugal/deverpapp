'use strict';


var dpmt_model = require('../model/dpmt_model.js');
var bookshelf = require('../model/database');
var dpmt_model_new = bookshelf.model('md_hr_dpmt_model');

exports.create_dpmt_dao_fn = function(dpmt, res, result){
  dpmt_model_new.forge({
                  department_name: dpmt.department_name_value,
                  created_on:dpmt.created_on_value,
                  updated_on:dpmt.updated_on_value,
                  created_by:dpmt.created_by_value,
                  updated_by:dpmt.updated_by_value,
                  status:dpmt.status_value
                }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
      result(err);
  });
}

exports.fetch_dpmt_dao_fn = function(req,res,result){
  dpmt_model_new.forge({department_id:req.department_id}).fetch()
  .then (function (status) {
      result(status)
  })
  .catch(function (err) {
    result(err)
  });
}
