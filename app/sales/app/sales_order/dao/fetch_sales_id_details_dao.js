'use strict';

var fetch_barchart_model = require('../model/salesorder_model');
var bookshelf = require('../model/database');

  exports.fetch_sales_id_details_dao_fn = function(salesorder, res ,result){
  bookshelf.knex('od_sales_sales_order as t1').select('t1.*','t9.*','t2.billing_id','t2.customer_email as bill_customer_email','t2.country_code as bill_country_code','t2.state_code as bill_state_code','t2.city_name as bill_city_name','t2.street_name as bill_street_name','t2.pincode as bill_pincode','t2.mobile_number as bill_mobile_number','t3.country_code as bill_country_code','t3.country_name as bill_country_name','t4.state_no as bill_state_code','t4.state_name as bill_state_name','t5.shipping_id','t5.customer_email as ship_customer_email','t5.country_code as ship_country_code','t5.state_code as ship_state_code','t5.city_name as ship_city_name','t5.street_name as ship_street_name','t5.pincode as ship_pincode','t5.mobile_number as ship_mobile_number','t6.country_code as ship_country_code','t6.country_name as ship_country_name','t7.state_no as ship_state_code','t7.state_name as ship_state_name','t8.*')
  .leftJoin('od_sales_customer_billing_address as t2', 't2.billing_id', 't1.billing_id')
  .leftJoin('md_country as t3', 't3.country_code', 't2.country_code')
  .leftJoin('md_state as t4', function () {
    this.on('t4.country_code', 't3.country_code')
      .on('t2.state_code', 't4.state_no');
  })
  .leftJoin('od_sales_customer_shipping_address as t5', 't5.shipping_id', 't1.shipping_id')
  .leftJoin('md_country as t6', 't6.country_code', 't5.country_code')
  .leftJoin('md_state as t7', function () {
    this.on('t7.country_code', 't6.country_code')
      .on('t5.state_code', 't7.state_no');
  })
  .leftJoin('md_procurement_item as t8', 't8.item_id', 't1.item_id')
  .leftJoin('md_sales_customer as t9', 't9.customer_id', 't1.customer_id')
  .where({'t1.salesorder_id':salesorder.salesid})

  .then (function (salesorder) {
    console.log(salesorder);
      result(salesorder)
  })

  .catch(function (err) {
    console.error(err);
    res.status(500).json({error: true, data: {message: err.message}});
  });
}
