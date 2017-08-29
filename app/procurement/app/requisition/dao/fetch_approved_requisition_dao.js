'use strict';
var database = require('../model/database');
// var requisition_process = require('../model/requisition_process_model.js');
var approvedRequistions=database.model('requisition_items');

exports.fetch_approved_requisitions_dao_fn =function(req,res,result){
   approvedRequistions.where({status: "active"}).fetchAll()
  .then (function (status) {
      result(status)
  })
}
