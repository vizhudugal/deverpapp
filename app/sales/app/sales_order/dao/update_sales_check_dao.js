'use strict';

var bookshelf = require('../model/database');


exports.update_sales_check_dao_fn = function(salesorder, res, result){
  bookshelf.knex('od_sales_sales_order')
  .where({'salesorder_id':salesorder.salesid})
  .update({
    sales_status:"Partially fullfilled"
  })
  .then (function (salesorder_id) {
    result(salesorder_id);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });

}
