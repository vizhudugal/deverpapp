'use strict';
var bookshelf = require('./database');

//*******************1111
var md_hr_emp_model = bookshelf.Model.extend({
  tableName: 'md_hr_employee',
  employee: function() {
    return this.hasMany(md_hr_emp_cont_model);
  }
});

var md_hr_emp_cont_model = bookshelf.Model.extend({
  tableName: 'md_hr_employee_contact',
  employeecontact: function() {
    return this.belongsTo(md_hr_emp_model);
  }
});

module.exports = bookshelf.model('md_hr_emp_model', md_hr_emp_model);
module.exports = bookshelf.model('md_hr_emp_cont_model', md_hr_emp_cont_model);

//**********************222222
// var employee_contact_details_model = bookshelf.Model.extend({
//   tableName: 'hr_employee_contact_details',
//   contact: function() {
//     return this.morphOne(hr_employee_details_model, 'employeevalues');
//   }
// });
//
// var employee_address_details_model = bookshelf.Model.extend({
//   tableName: 'hr_employee_address_details',
//   address: function() {
//     return this.morphMany(hr_employee_details_model, 'employeevalues');
//   }
// });
//
// var employee_details_model = bookshelf.Model.extend({
//   tableName: 'hr_employee_details',
//    employeevalues: function() {
//     return this.morphTo('employeevalues', employee_contact_details_model, employee_address_details_model);
//   }
// });
//
// module.exports = bookshelf.model('employee_contact_details_model', employee_contact_details_model);
// module.exports = bookshelf.model('employee_address_details_model', employee_address_details_model);
// module.exports = bookshelf.model('employee_details_model', employee_details_model);


//****************333333


// var employee_extended_model = bookshelf.Model.extend({
//   tableName: 'hr_employee_details',
// });
// module.exports = bookshelf.model('employee_extended_model', employee_extended_model);
//
// var employee_address_extended_model = bookshelf.Model.extend({
//   tableName: 'hr_employee_address_details',
// });
// module.exports = bookshelf.model('employee_address_extended_model', employee_address_extended_model);
//
// var employee_contact_extended_model = bookshelf.Model.extend({
//   tableName: 'hr_employee_contact_details',
// });
// module.exports = bookshelf.model('employee_contact_extended_model', employee_contact_extended_model);

//****************4444444

// var md_hr_employee_contact_model = bookshelf.Model.extend({
//     tableName: 'md_hr_employee_contact_tobeverified',
//     employees: function() {
//         return this.hasMany(md_hr_employee_model, 'employee_id');
//     }
// });
//
// var md_hr_employee_model = bookshelf.Model.extend({
//    tableName: 'md_hr_employee_tobeverified',
//    contact: function() {
//        return this.belongsTo(md_hr_employee_contact_model, 'employee_id');
//    }
// });
//
// module.exports = bookshelf.model('md_hr_employee_contact_model', md_hr_employee_contact_model);
// module.exports = bookshelf.model('md_hr_employee_model', md_hr_employee_model);
