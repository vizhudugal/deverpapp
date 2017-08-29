'use strict';

var map_item_supplier_dao = require('../dao/map_item_supplier_dao.js');

exports.fix_item_supplier = function(req, res){
  map_item_supplier_dao.map_item_supplier_dao_fn(req.body, res, function(result){
      res.json({'status':result});
  });
};
