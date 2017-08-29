'use strict';
var bookshelf = require('./database');

var item_detail_extended_model= bookshelf.Model.extend({

  tableName: 'md_procurement_item_detail',

});

module.exports = bookshelf.model('item_detail_extended_model', item_detail_extended_model);
