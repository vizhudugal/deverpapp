'use strict';
var bookshelf = require('./database');

var quality_parameter_inspection_extended_model= bookshelf.Model.extend({

  tableName: 'od_quality_param_multiple_value_history',

});

module.exports = bookshelf.model('quality_parameter_inspection_extended_model', quality_parameter_inspection_extended_model);
