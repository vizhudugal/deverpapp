'use strict';
var database = require('../model/database');

exports.requisition_approval_response = function(requisition_response, res, result){
  database.knex('od_procurement_requisition').where('requisition_number', requisition_response.requisitionno)
  .update({requisition_status: requisition_response.respond})
  .then(function (status) {
    if (status==1) {
      result("Response Updated");
    }
    else {
      result("Response not Updated!");
    }
  })
  .catch(function(err){
    console.error(err);
    result("Error!Response not Updated!");
  })
}
