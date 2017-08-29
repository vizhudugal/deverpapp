'use strict';
var bookshelf = require('./database');

var itemtype_role_mapping_model = bookshelf.Model.extend({
  tableName: 'md_procurement_requisition_itemtype_role_mapping',
});
module.exports = bookshelf.model('itemtype_role_mapping_model', itemtype_role_mapping_model);
