'use strict';
var bookshelf = require('./database');

var inward_reg_model= bookshelf.Model.extend({

  tableName: 'od_inward_register',

});

module.exports = bookshelf.model('inward_reg_model', inward_reg_model);
