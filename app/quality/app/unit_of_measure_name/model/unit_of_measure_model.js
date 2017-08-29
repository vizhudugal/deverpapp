'use strict';
var bookshelf = require('./database');

var item_unit_of_measure_model= bookshelf.Model.extend({

  tableName: 'md_item_unit_of_measure',
});
module.exports = bookshelf.model('item_unit_of_measure_model', item_unit_of_measure_model);
