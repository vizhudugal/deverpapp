'use strict';
module.exports = function(app)
 {
  // console.log("router");
  var create_quality_parameter_controller = require('../quality_parameter/controller/create_quality_parameter_controller');
  var fetch_quality_parameter_controller = require('../quality_parameter/controller/fetch_quality_parameter_controller');
  // var update_quality_parameter_controller = require('../quality_parameter/controller/update_quality_parameter_controller');
  var fetch_quality_parameter_auto_controller = require('../quality_parameter/controller/fetch_quality_parameter_auto_controller');
  var fetch_qlty_flag_contr = require('../quality_parameter/controller/fetch_qlty_flag_contr');

  // nodeDev Routes
  app.route('/quality_parameter')
  .post(create_quality_parameter_controller.create_quality_parameter_controller_fn)
  .get(fetch_quality_parameter_controller.fetch_quality_parameter_controller_fn)
  // .post(update_quality_parameter_controller.update_quality_parameter_controller_fn)
app.route('/quality_parameter_auto')
.get(fetch_quality_parameter_auto_controller.fetch_quality_parameter_auto_controller_fn)
// *****fetch quality flag by quality_strat_id**********
app.route('/fetch_quality_parameter_flag')
.get(fetch_qlty_flag_contr.fetch_qlty_flag_contr_fn)
}
