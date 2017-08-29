 'use strict';
 var bookshelf = require('./database');
 var quality_param_model= bookshelf.Model.extend({
   tableName: 'qlty_inward_register',
 });
 module.exports = bookshelf.model('quality_param_model', quality_param_model);
