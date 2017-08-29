'use strict';

var bookshelf = require('../model/database');
var fetch_supplier_names_supplier_mapping_dao = require('../dao/fetch_supplier_names_supplier_mapping_dao.js');

exports.fetch_supplier_names = function(req,res){
  fetch_supplier_names_supplier_mapping_dao.fetch_supplier_names_supplier_mapping_dao_fn(req.query, res, function(suppliernames){
    res.status(200).json({'returnval':suppliernames});
  });
};
