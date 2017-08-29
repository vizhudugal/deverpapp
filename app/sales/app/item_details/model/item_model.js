'use strict';
var bookshelf = require('./database');

var customer_contact_details_extended_model = bookshelf.Model.extend({
  tableName: 'md_procurement_item',

  customer_contact_fn: function() {
    return this.belongsTo(customer_extended_model, 'customer_details_fn');
  }
});
var customer_extended_model = bookshelf.Model.extend({
  tableName: 'md_sales_customer',

  customer_details_fn: function() {
    return this.hasMany('customer_details_fn',customer_contact_details_extended_model);
  }
});
 module.exports = bookshelf.model('contact_model', customer_contact_details_extended_model);
 module.exports = bookshelf.model('customer_model', customer_extended_model);
