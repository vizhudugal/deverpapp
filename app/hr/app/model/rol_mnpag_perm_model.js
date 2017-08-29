'use strict';
var bookshelf = require('./database');

var md_hr_rol_mnpag_perm_model = bookshelf.Model.extend({
  tableName: 'md_hr_role_menupage_permission',
});
module.exports = bookshelf.model('md_hr_rol_mnpag_perm_model', md_hr_rol_mnpag_perm_model);
