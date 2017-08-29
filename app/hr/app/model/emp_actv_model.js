'use strict';
var bookshelf = require('./database');

var od_hr_emp_actv_model = bookshelf.Model.extend({
  tableName: 'od_hr_employee_activity',
});
module.exports = bookshelf.model('od_hr_emp_actv_model', od_hr_emp_actv_model);
