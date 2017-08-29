'use strict';
var bookshelf = require('./database');

var md_hr_rol_model = bookshelf.Model.extend({
  tableName: 'md_hr_role',
});
module.exports = bookshelf.model('md_hr_rol_model', md_hr_rol_model);
