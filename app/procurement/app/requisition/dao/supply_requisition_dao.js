'use strict';
// var requisition_process_model = require('../model/requisition_process_model.js');
var bookshelf = require('../model/database');
var stores_model = require('../model/stores_model.js');
var requisition_items_movement=bookshelf.model('requisition_items_movement');

exports.supply_requisition_item_dao_fn = function(requisition_supply, res, result){
  requisition_items_movement.forge({status:requisition_supply.status}).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
    console.error(err);
    result(err);
  });
}
