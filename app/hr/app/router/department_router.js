'use strict';
module.exports = function(app) {
  var dpmt_contr = require('../controller/dpmt_contr.js');

  app.route('/adddepartment')
  .post(dpmt_contr.create_dpmt)

  app.route('/searchdepartment')
  .get(dpmt_contr.fetch_dpmt)
}
