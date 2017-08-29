'use strict';

var bookshelf = require('../model/database');
var supplier_model = require('../model/supplier_model.js');
var supplier_md_extented_model=bookshelf.model('supplier_md_extented_model');

exports.fetch_supplier_names_supplier_mapping_dao_fn =function(req,res,result){
  supplier_md_extented_model.fetchAll({columns:['supplier_name']})
  .then (function (data) {
    result(data)
  })
  .catch(function(err){
    result(err)
  })
}
