'use strict';

var bookshelf = require('../model/database');

exports.update_sales_dao_fn = function(salesorder, res, result){
    console.log("dao"+JSON.stringify(salesorder,null,1));
  bookshelf.knex('od_sales_sales_order').where('salesorder_id',salesorder.salesid)
  .update({
    'item_specification':salesorder.specification,
    'sales_status':salesorder.salesstatus
  })
  .then (function (salesorder_id) {
    result(salesorder_id);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });

}
