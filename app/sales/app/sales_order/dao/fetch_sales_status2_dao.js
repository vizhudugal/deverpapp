'use strict';

var fetch_sales_details_model = require('../model/salesorder_model');
var bookshelf = require('../model/database');

exports.fetch_sales_status2_dao_fn = function(salesorder,res,result){
    bookshelf.knex('od_sales_sales_order as T1').select( 'T1.salesorder_id','T1.salesorder_date','T1.customer_id','T1.item_id','T1.container_quantity',
      'T1.order_quantity','T1.required_delivery_date','T1.status','T1.delivered_quantity','T2.customer_name','T2.city','T3.item_name','T5.salesorder_id')
      .sum('T5.shipping_quantity as assignedquantity')
      .leftJoin('md_sales_customer as T2', 'T1.customer_id', 'T2.customer_id')
      .leftJoin('md_sales_finishedgoods_item as T3', 'T3.item_id', 'T1.item_id')
      .leftJoin('od_sales_shipping_quantity as T5', 'T5.salesorder_id', 'T1.salesorder_id')
      .where('T1.sales_status',salesorder.status).orWhere('T1.sales_status',salesorder.status1)

    .then (function (salesorder_id) {
        result(salesorder_id)
    })
    .catch(function (err) {
        console.error(err);
        res.status(500).json({error: true, data: {message: err.message}});
    });
}
