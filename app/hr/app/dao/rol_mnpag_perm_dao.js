'use strict';

var rol_mnpag_perm_model = require('../model/rol_mnpag_perm_model.js');
var bookshelf = require('../model/database');
var rol_mnpag_perm_model_new = bookshelf.model('md_hr_rol_mnpag_perm_model');

exports.create_rol_mnpag_perm_dao_fn = function(role_menu, res, result){
  rol_mnpag_perm_model_new.forge({
                  role_id: role_menu.role_id_value,
                  menu_id: role_menu.menu_id_value,
                  read_permission:role_menu.read_permission_value,
                  write_permission:role_menu.write_permission_value,
                  update_permission:role_menu.update_permission_value,
                  delete_permission:role_menu.delete_permission_value,
                  created_on:role_menu.created_on_value,
                  updated_on:role_menu.updated_on_value,
                  created_by:role_menu.created_by_value,
                  updated_by:role_menu.updated_by_value,
                  status:role_menu.status_value
                }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
      result(err);
  });
}

exports.fetch_rol_mnpag_perm_dao_fn = function(req,res,result){
  rol_mnpag_perm_model_new.where({role_id:req.role_id,menu_id:req.menu_id}).fetch()
  .then (function (status) {
        result(status)
  })
  .catch(function (err) {
      result(err)
  });
}
