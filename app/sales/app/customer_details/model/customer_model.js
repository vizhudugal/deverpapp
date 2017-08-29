'use strict';
var bookshelf = require('./database');

var customer_contact_details_extended_model = bookshelf.Model.extend({
  tableName: 'md_sales_customer_contact',

});
var customer_extended_model = bookshelf.Model.extend({
  tableName: 'md_sales_customer',

});
var customer_billing_model = bookshelf.Model.extend({
  tableName: 'od_sales_customer_billing_address',

});
var customer_shipping_model = bookshelf.Model.extend({
  tableName: 'od_sales_customer_shipping_address',

});
var customer_bill_model = bookshelf.Model.extend({
  tableName: 'od_customer_bill_mapping',

});
var customer_ship_model = bookshelf.Model.extend({
  tableName: 'od_customer_ship_mapping',

});

 module.exports = bookshelf.model('contact_model', customer_contact_details_extended_model);
 module.exports = bookshelf.model('customer_model', customer_extended_model);
 module.exports = bookshelf.model('billing_model', customer_billing_model);
 module.exports = bookshelf.model('shipping_model', customer_shipping_model);
 module.exports = bookshelf.model('bill_model', customer_bill_model);
 module.exports = bookshelf.model('ship_model', customer_ship_model);
