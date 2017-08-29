'use strict';

var inventory_supplied_item_reduction_dao = require('../dao/inventory_supplied_item_reduction_dao.js');

exports.inventory_item_reduction = function(req,res){
  inventory_supplied_item_reduction_dao.inventory_item_reduction_dao_fn(req.body, res, function(result){
    res.json({"returnval":result});
  });
};
