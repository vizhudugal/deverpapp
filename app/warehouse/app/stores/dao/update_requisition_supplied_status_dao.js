'use strict';
var bookshelf = require('../model/database');

exports.update_requisition_supplied_status_dao_fn = function(requisition, res, result){
  bookshelf.knex('od_procurement_requisition').where('requisition_number',requisition.reqno)
  .update({"requisition_status": requisition.status})
  .then(function(status){
    if(status==1){
      result("Entered number of Item(s) Supplied");
    }
    else {
      result("Error!Item(s) not supplied!");
    }
  })
  .catch(function(err){
    console.error(err);
    result("Error While Supplying Item!");
  })
}
