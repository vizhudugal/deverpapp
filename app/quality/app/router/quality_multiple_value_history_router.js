'use strict';
module.exports = function(app)
 {
  // console.log("router");
  var create_quality_multiple_value_history_controller = require('../quality_multiple_value_history/controller/create_quality_multiple_value_history_controller');
  // nodeDev Routes
  app.route('/quality_multiple_value_history')
  .post(create_quality_multiple_value_history_controller.create_quality_multiple_value_history_controller_fn)
}

// app.route('/quality_parameter/quality_parameter_id')
//   .get(fetch_quality_parameter_controller.fetch_quality_parameter_controller)
