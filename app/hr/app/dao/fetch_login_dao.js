'use strict';

var emp_model = require('../model/emp_model.js');
var bookshelf = require('../model/database');
var fetch_login_model = bookshelf.model('md_hr_emp_model');

exports.fetch_login_dao_fn = function(req,res,result){
  console.log(" Inside Login ");

     bookshelf.knex.select('t1.employee_id','t2.role_id','t3.menu_id','t4.ui_component','t4.ui_menuname').from('md_hr_employee as t1')
    .leftJoin('md_hr_employee_role_department as t2','t1.employee_id','t2.employee_id')
    .leftJoin('md_hr_role_menupage_permission as t3','t3.role_id','t2.role_id')
    .leftJoin('md_hr_menu_page as t4','t4.menu_id','t3.menu_id')
    .where({'t1.username':req.username,'t1.password':req.password})
      .then (function (status) {
        if(status.length>0){
          result(status)
        } else
        {
          result("Invalid!")
        }
      })
      .catch(function (err) {
          result(err)
      });
  }
