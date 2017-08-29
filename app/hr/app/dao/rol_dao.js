'use strict';

var rol_model = require('../model/rol_model.js');
var bookshelf = require('../model/database');
var rol_model_new = bookshelf.model('md_hr_rol_model');

exports.create_rol_dao_fn = function(rol, res, result){
  rol_model_new.forge({
                  role_name: rol.role_name_value,
                  created_on:rol.created_on_value,
                  updated_on:rol.updated_on_value,
                  created_by:rol.created_by_value,
                  updated_by:rol.updated_by_value,
                  status:rol.status_value
                }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
      result(err);
  });
}

exports.fetch_rol_dao_fn = function(req,res,result){
console.log("req.rol_id"+JSON.stringify(req.role_id));
  rol_model_new.forge({role_id:req.role_id}).fetch()
  .then (function (status) {
        result(status)
  })
  .catch(function (err) {
      result(err)
  });
}
