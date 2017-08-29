'use strict';
module.exports = function(app) {
  var emp_rol_dpmt_contr = require('../controller/emp_rol_dpmt_contr.js');
  var menu_page_contr = require('../controller/menu_page_contr.js');
  var rol_mnpag_perm_contr = require('../controller/rol_mnpag_perm_contr.js');
  var rol_itmtyp_contr = require('../controller/rol_itmtyp_contr.js');



  app.route('/addemployeeroledepartment')
  .post(emp_rol_dpmt_contr.create_emp_rol_dpmt)

  app.route('/searchemployeeroledepartment')
  .get(emp_rol_dpmt_contr.fetch_emp_rol_dpmt)

  app.route('/addmenupage')
  .post(menu_page_contr.create_menu_page)

  app.route('/searchmenupage')
  .get(menu_page_contr.fetch_menu_page);

  app.route('/addrolemenupagepermission')
  .post(rol_mnpag_perm_contr.create_rol_mnpag_perm)

  app.route('/searchrolemenupagepermission')
  .get(rol_mnpag_perm_contr.fetch_rol_mnpag_perm)

  app.route('/addroleitemtype')
  .post(rol_itmtyp_contr.create_rol_itmtyp)

  app.route('/searchroleitemtype')
  .get(rol_itmtyp_contr.fetch_rol_itmtyp)
}
