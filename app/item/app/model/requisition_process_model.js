'use strict';
var bookshelf = require('./database');

var requisition_items = bookshelf.Model.extend({
  tableName: 'od_procurement_requisition',
}); module.exports = bookshelf.model('requisition_items', requisition_items);

var requisition_items_movement = bookshelf.Model.extend({
  tableName: 'od_stores_item_movement',
}); module.exports = bookshelf.model('requisition_items_movement', requisition_items_movement);
