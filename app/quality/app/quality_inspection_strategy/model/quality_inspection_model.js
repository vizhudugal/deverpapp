'use strict';
var bookshelf = require('./database');

var quality_parameter_inspection_extended_model= bookshelf.Model.extend({

  tableName: 'od_inspection_quality_strat_map',

});

module.exports = bookshelf.model('quality_parameter_inspection_extended_model', quality_parameter_inspection_extended_model);
