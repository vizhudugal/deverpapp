'use strict';
var bookshelf = require('./database');

var quality_item_result_model= bookshelf.Model.extend({

  tableName: 'od_quality_item_result',

});

module.exports = bookshelf.model('quality_item_result_model', quality_item_result_model);
