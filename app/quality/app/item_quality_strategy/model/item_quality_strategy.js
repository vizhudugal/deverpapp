'use strict';
var bookshelf = require('./database');

var item_quality_strat_model= bookshelf.Model.extend({

  tableName: 'od_item_quality_strat_map',

});

module.exports = bookshelf.model('item_quality_strat_model', item_quality_strat_model);
