'use strict';

var bookshelf = require('../model/database');
var fetch_item_names_supplier_mapping_dao = require('../dao/fetch_item_names_supplier_mapping_dao.js');

exports.fetch_item_names = function(req,res){
  fetch_item_names_supplier_mapping_dao.fetch_item_names_supplier_mapping_dao_fn(req.query, res, function(itemnames){
    res.status(200).json({'returnval':itemnames});
  });
};
