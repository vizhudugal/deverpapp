'use strict';
module.exports = function(app)
 {
  var create_quality_inward_reg_controller = require('../quality_inward_register/controller/create_quality_inward_reg_controller');
  var fetch_quality_inward_reg_controller = require('../quality_inward_register/controller/fetch_quality_inward_reg_controller');
  // nodeDev Routes
  app.route('/quality_inward_register')
  .post(create_quality_inward_reg_controller.create_quality_inward_reg_controller_fn)
  .get(fetch_quality_inward_reg_controller.fetch_quality_inward_reg_controller_fn)
}
