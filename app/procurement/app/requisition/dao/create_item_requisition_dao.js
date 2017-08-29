'use strict';
var bookshelf = require('../model/database');
var requisition_process_model = require('../model/requisition_process_model.js');
var create_requisition=bookshelf.model('requisition_items');

exports.create_requisition_item_dao_fn = function(requisition_detail, res, result){
  create_requisition.forge({
    requisition_number:requisition_detail.requisitionid,
    requisition_date:null,
    requisition_type_id:requisition_detail.selectedtype,
    item_id:requisition_detail.iid,
    item_quantity:requisition_detail.itemquantity,
    warehouse_stores_id:requisition_detail.whlocation,
    requisition_status:"Created",
    item_required_date:requisition_detail.requireddate,
    created_by:requisition_detail.createdby,
    created_on:null,
    updated_by:requisition_detail.updatedby,
    updated_on:null,
    status:null
  }).save()
  .then (function (status) {
    result("Requisition Created");
  })
  .catch(function (err) {
    result("Requisition Not Created!");
  });
}
