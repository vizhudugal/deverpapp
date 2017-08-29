'use strict';
var bookshelf = require('./database');

var md_hr_emp_rol_dpmt_model = bookshelf.Model.extend({
  tableName: 'md_hr_employee_role_department',
});
module.exports = bookshelf.model('md_hr_emp_rol_dpmt_model', md_hr_emp_rol_dpmt_model);
