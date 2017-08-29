'use strict';
var bookshelf = require('../model/database');

exports.update_requisition_supplied_status_dao_fn = function(requisition, res, result){
  bookshelf.knex('od_procurement_requisition').where('requisition_number',requisition.reqno)
  .update({
    "status": requisition.status
  })
}
