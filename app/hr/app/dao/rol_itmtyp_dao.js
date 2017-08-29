'use strict';


var itemtype_role_mapping_model = require('../model/role_itemtype.js');
var bookshelf = require('../model/database');
var itemtype_role_mapping_model_new = bookshelf.model('itemtype_role_mapping_model');

exports.create_rol_itmtyp_dao_fn = function(rol_itmtyp, res, result){
  itemtype_role_mapping_model_new.forge({
                  role_id: rol_itmtyp.role_id_value,
                  item_type_id: rol_itmtyp.item_type_id_value,
                  created_on:null,
                  updated_on:null,
                  created_by:rol_itmtyp.created_by_value,
                  updated_by:rol_itmtyp.updated_by_value,
                  status:rol_itmtyp.status_value
                }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
      result(err);
  });
}

exports.fetch_rol_itmtyp_dao_fn = function(req,res,result){
  itemtype_role_mapping_model_new.forge({role_id:req.role_id}).fetch()
  .then (function (status) {
      result(status)
  })
  .catch(function (err) {
    result(err)
  });
}
