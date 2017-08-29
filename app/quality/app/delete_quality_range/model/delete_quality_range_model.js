'use strict';
var bookshelf = require('./database');

var quality_param_strat_range_model= bookshelf.Model.extend({

  tableName: 'od_quality_param_strat_range_map',

});

module.exports = bookshelf.model('quality_param_strat_range_model', quality_param_strat_range_model);
