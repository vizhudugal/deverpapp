'use strict';
var bookshelf = require('./database');

var stores_area = bookshelf.Model.extend({
  tableName: 'md_store_area',
}); module.exports = bookshelf.model('stores_area', stores_area);

var stores_container = bookshelf.Model.extend({
  tableName: 'md_store_container_type',
}); module.exports = bookshelf.model('stores_container', stores_container);

var item_storage_location = bookshelf.Model.extend({
  tableName: 'od_item_storage_locate',
}); module.exports = bookshelf.model('item_storage_location', item_storage_location);

var stores = bookshelf.Model.extend({
  tableName: 'md_store',
}); module.exports = bookshelf.model('stores', stores);

var inventory_item_quantity = bookshelf.Model.extend({
  tableName: 'od_item_inventory',
}); module.exports = bookshelf.model('inventory_item_quantity', inventory_item_quantity);

var requisition_items_movement = bookshelf.Model.extend({
  tableName: 'od_wms_item_movement',
}); module.exports = bookshelf.model('requisition_items_movement', requisition_items_movement);
