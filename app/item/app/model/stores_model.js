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
