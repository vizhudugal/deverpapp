'use strict';

var fetch_barchart_model = require('../model/salesorder_model');
var bookshelf = require('../model/database');

exports.fetch_barchart_dao_fn = function(salesorder,res,result){

  bookshelf.knex('od_item_inventory as t1').select('t1.item_available_quantity','t2.order_quantity','t2.delivered_quantity')
  .leftJoin('od_sales_sales_order as t2', 't2.item_id', 't1.item_id')
  .where({'t2.item_id':salesorder.itemssid})
  .then (function (data) {
      result(data)
  })

  .catch(function (err) {
    console.error(err);
    res.status(500).json({error: true, data: {message: err.message}});
  });
}
