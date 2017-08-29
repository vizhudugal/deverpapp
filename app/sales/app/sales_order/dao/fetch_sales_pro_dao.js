'use strict';

var fetch_barchart_model = require('../model/salesorder_model');
var bookshelf = require('../model/database');

exports.fetch_sales_pro_dao_fn = function(salesorder,res,result){

  bookshelf.knex('od_sales_sales_order as t1').select('t2.customer_name','t3.item_name','t2.city','t1.order_quantity','t1.container_quantity','t1.required_delivery_date')
  .leftJoin('md_sales_customer as t2', 't2.customer_id', 't1.customer_id')
  .leftJoin('md_sales_finishedgoods_item as t3', 't3.item_id', 't1.item_id')
  .where({'t1.salesorder_id':salesorder.salesorder_id})

  .then (function (salesorder) {
      result(salesorder)
  })

  .catch(function (err) {
    console.error("pro"+err);
    res.status(500).json({error: true, data: {message: err.message}});
  });
}
