'use strict';
module.exports = function(app)
 {
  // console.log("router");
  var create_quality_inspection_strategy_controller = require('../quality_inspection_strategy/controller/create_quality_inspection_strategy_controller');
  var fetch_quality_inspection_strategy_controller = require('../quality_inspection_strategy/controller/fetch_quality_inspection_strategy_controller');
  // nodeDev Routes
  app.route('/quality_parameter_inspection_strategy')
  .post(create_quality_inspection_strategy_controller.create_quality_inspection_strategy_controller_fn)
  .get(fetch_quality_inspection_strategy_controller.fetch_quality_inspection_strategy_controller_fn)
}

// app.route('/quality_parameter/quality_parameter_id')
//   .get(fetch_quality_parameter_controller.fetch_quality_parameter_controller)
