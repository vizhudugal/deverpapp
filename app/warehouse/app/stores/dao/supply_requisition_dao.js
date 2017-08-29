'use strict';
var database = require('../model/database');
var stores_model = require('../model/stores_model.js');
var requisition_items_movement=database.model('requisition_items_movement');


exports.supply_requisition_item_dao_fn = function(requisition_supply, res, result){
  requisition_items_movement.forge({
    item_move_req_id:requisition_supply.reqno,
    container_quantity:requisition_supply.containerquantity,
    item_move_quantity:requisition_supply.supplyquantity,
    source_location:requisition_supply.sourcelocation,
    target_location_id:requisition_supply.targetlocationid,
    target_store_id:requisition_supply.targetstoreid,
    assigned_to:requisition_supply.assignedto,
    item_move_priority:requisition_supply.itemmovepriority,
    item_move_date_time:null,
    item_move_status:requisition_supply.status,
    created_by:requisition_supply.createdby,
    created_on:null,
    updated_by:requisition_supply.updatedby,
    updated_on:null,
    target_area_id:requisition_supply.targetareaid
  }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
    console.error(err);
    result(err);
  });
}
