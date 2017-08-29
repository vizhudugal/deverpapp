'use strict';

var emp_model = require('../model/emp_model.js');
var bookshelf = require('../model/database');
var emp_model_new = bookshelf.model('md_hr_emp_model');
var emp_contact_model = bookshelf.model('md_hr_emp_cont_model');
var bcrypt = require('bcrypt-nodejs');

exports.create_emp_dao_fn = function(emp, res, result){
  // console.log("   --------------"+emp.employee_id_value);
  // console.log( " ......password "+bcrypt.hashSync(emp.employee_password_value, null, null))
  emp_model_new.forge({
                  employee_name:emp.employee_name_value,
                  date_of_birth:emp.date_of_birth_value,
                  gender:emp.gender_value,
                  age:emp.age_value,
                  type_of_employment:emp.type_of_employment_value,
                  hire_date:emp.hire_date_value,
                  end_date:emp.end_date_value,
                  building_number:emp.building_number_value,
                  street_name:emp.street_name_value,
                  apartment_name:emp.apartment_name_value,
                  land_mark:emp.land_mark_value,
                  location:emp.location_value,
                  city:emp.city_value,
                  district:emp.district_value,
                  state:emp.state_value,
                  country:emp.country_value,
                  pincode:emp.pincode_value,
                  username:emp.username_value,
                  //password:emp.password_value,
                  password:bcrypt.hashSync(emp.password_value, null, null),
                  created_on:emp.created_on_value,
                  updated_on:emp.updated_on_value,
                  created_by:emp.created_by_value,
                  updated_by:emp.updated_by_value,
                  status:emp.status_value
                }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
        result(err);
  });
}

exports.fetch_emp_dao_fn = function(req,res,result){
  emp_model_new.forge({employee_id:req.employee_id}).fetch()
  .then (function (status) {
      result(status)
  })
  .catch(function (err) {
    result(err)
  });
}

exports.create_emp_cont_dao_fn = function(emp, res, result){
  emp_contact_model.forge({
                  phone:emp.phone_value,
                  mobile:emp.mobile_value,
                  email:emp.email_value,
                  employee_id:emp.employee_id_value,
                  created_on:emp.created_on_value,
                  updated_on:emp.updated_on_value,
                  created_by:emp.created_by_value,
                  updated_by:emp.updated_by_value,
                  status:emp.status_value
                }).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
      result(err);
  });
}

exports.fetch_emp_cont_dao_fn = function(req,res,result){
  console.log("  request "+ req.employee_id)
  emp_contact_model.forge({employee_id:req.employee_id}).fetch()
  .then (function (status) {
      result(status)
  })
  .catch(function (err) {
    result(err)
  });
}
