'use strict';
var bookshelf = require('./database');

var item_extended_model = bookshelf.Model.extend({
  tableName: 'md_procurement_item',
}); module.exports = bookshelf.model('item_details_model_pg', item_extended_model);

var item_extended_model_fg = bookshelf.Model.extend({
  tableName: 'md_sales_finishedgoods_item',
}); module.exports = bookshelf.model('item_extended_model_fg', item_extended_model_fg);

var item_container_model = bookshelf.Model.extend({
  tableName: 'md_item_container_name',
}); module.exports = bookshelf.model('item_details_container_model', item_container_model);

var item_group_model = bookshelf.Model.extend({
  tableName: 'md_item_group_name',
}); module.exports = bookshelf.model('item_details_group_model', item_group_model);

var item_type_model = bookshelf.Model.extend({
  tableName: 'md_item_item_type',
}); module.exports = bookshelf.model('item_details_type_model', item_type_model);

var item_unit_of_measure_model = bookshelf.Model.extend({
  tableName: 'md_item_unit_of_measure',
}); module.exports = bookshelf.model('item_details_unit_of_measure_model', item_unit_of_measure_model);

var item_warehouse_model = bookshelf.Model.extend({
  tableName: 'md_warehouse_warehouse',
}); module.exports = bookshelf.model('item_details_warehouse_model', item_warehouse_model);

var item_supplier_mapping_model = bookshelf.Model.extend({
  tableName: 'od_procurement_item_supplier_mapping',
}); module.exports = bookshelf.model('item_supplier_mapping_model', item_supplier_mapping_model);
