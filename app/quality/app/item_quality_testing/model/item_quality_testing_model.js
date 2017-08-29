'use strict';
var bookshelf = require('./database');

var item_quality_testing_model= bookshelf.Model.extend({

  tableName: 'od_item_quality_testing',

});

module.exports = bookshelf.model('item_quality_testing_model', item_quality_testing_model);
