'use strict';
module.exports = function(app)
 {
  var create_inward_reg_contr = require('../inward_register/controller/create_inward_reg_contr');
  var fetch_inward_reg_contr = require('../inward_register/controller/fetch_inward_reg_contr');
  var fetch_qstrat_id_contr = require('../inward_register/controller/fetch_qstrat_id_contr');

  // nodeDev Routes
  app.route('/inward_register')
  .post(create_inward_reg_contr.create_inward_reg_contr_fn)
  .get(fetch_inward_reg_contr.fetch_inward_reg_contr_fn)

  app.route('/fetch_qstrat_by_inward_register')
  .get(fetch_qstrat_id_contr.fetch_qstrat_id_contr_fn)
}
