'use strict';
var bookshelf = require('./database');

var salesorder_extended_model = bookshelf.Model.extend({
  tableName: 'od_sales_sales_order',
}); module.exports = bookshelf.model('salesorder_model', salesorder_extended_model);
var sales_veh_pro_extended_model = bookshelf.Model.extend({
  tableName: 'od_sales_shipping_quantity',
}); module.exports = bookshelf.model('sales_veh_pro_model', sales_veh_pro_extended_model);

var customer_model = bookshelf.Model.extend({
  tableName: 'md_sales_customer',
}); module.exports = bookshelf.model('customer_model', customer_model);

var item_model = bookshelf.Model.extend({
  tableName: 'md_procurement_item',
}); module.exports = bookshelf.model('item_model', item_model);
