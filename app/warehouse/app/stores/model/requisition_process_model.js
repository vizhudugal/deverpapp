'use strict';
var bookshelf = require('./database');

var requisition_items = bookshelf.Model.extend({
  tableName: 'od_procurement_requisition',
}); module.exports = bookshelf.model('requisition_items', requisition_items);
