'use strict';
var bookshelf = require('../../../../procurement/app/requisition/model/database');
var requisitionModel=require('../../../../procurement/app/requisition/model/requisition_process_model.js');
var requisitionQuantity=bookshelf.model('requisition_items');

exports.requisition_required_item_quantity_service_dao_fn =function(req,res,result){
  requisitionQuantity.where({"requisition_number":req.requisitionnumber}).fetch()
  .then(function(data){
    result(data)
  })
  .catch(function(err){
    console.error(err);
    result(err);
  })
}
