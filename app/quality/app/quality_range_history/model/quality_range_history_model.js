'use strict';
var bookshelf = require('./database');

var quality_param_range_model= bookshelf.Model.extend({

  tableName: 'od_quality_param_range_history',

});

module.exports = bookshelf.model('quality_param_range_model', quality_param_range_model);
