'use strict';
module.exports = function(app)
 {
  // console.log("router");
  var create_item_controller = require('../item_detail/controller/create_item_controller');
  var fetch_item_controller = require('../item_detail/controller/fetch_item_controller');
  // nodeDev Routes
  app.route('/item_details_router')
  .post(create_item_controller.create_item_controller_fn)
  .get(fetch_item_controller.fetch_item_controller_fn)
}

// app.route('/quality_parameter/quality_parameter_id')
//   .get(fetch_quality_parameter_controller.fetch_quality_parameter_controller)
