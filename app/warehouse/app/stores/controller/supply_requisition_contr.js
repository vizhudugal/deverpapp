'use strict';

var supply_requisition_dao = require('../dao/supply_requisition_dao.js');
var inventory_supplied_item_reduction_dao = require('../dao/inventory_supplied_item_reduction_dao.js');
var update_requisition_supplied_status_dao = require('../dao/update_requisition_supplied_status_dao.js');

exports.supply_requisitions = function(req,res){
  supply_requisition_dao.supply_requisition_item_dao_fn(req.query, res, function(result){
    inventory_supplied_item_reduction_dao.inventory_item_reduction_dao_fn(req.query, res, function(result1){
      update_requisition_supplied_status_dao.update_requisition_supplied_status_dao_fn(req.query, res, function(result2){
        res.json({"processstatus":result2});
      });
    });
  });
};
