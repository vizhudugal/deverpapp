'use strict';

var bookshelf = require('../model/database');
var new_sales_details_model = require('../model/salesorder_model');
var customer_model = bookshelf.model('customer_model');
var item_model = bookshelf.model('item_model');
var salesorder_model = bookshelf.model('salesorder_model');

exports.add_sales_details_dao_fn = function(salesorder,res, result){
  salesorder_model.forge({
    salesorder_date:salesorder.salesorderdate,
    customer_id:salesorder.customerid,
    item_id:salesorder.itemid,
    item_description:salesorder.description,
    item_specification:salesorder.specification,
    container_quantity:salesorder.containerquantity,
    order_quantity:salesorder.orderquantity,
    delivered_quantity:salesorder.deliveredquantity,
    required_delivery_date:salesorder.requireddeliverydate,
    sales_status:salesorder.salesstatus,
    emp_id:"SOS",
    billing_id:"BILL000002",
    shipping_id:"SHIP000003"
  }).save()
  .then (function (salesorder_id) {
    result(salesorder_id);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
  
}
