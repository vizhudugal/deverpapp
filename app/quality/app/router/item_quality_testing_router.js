'use strict';
module.exports = function(app)
 {
  var create_item_quality_testing_controller = require('../item_quality_testing/controller/create_item_quality_testing_controller');
  var fetch_item_quality_testing_controller = require('../item_quality_testing/controller/fetch_item_quality_testing_controller');
  // nodeDev Routes
  app.route('/item_quality_testing')
  .post(create_item_quality_testing_controller.create_item_quality_testing_controller_fn)
  .get(fetch_item_quality_testing_controller.fetch_item_quality_testing_controller_fn)
}
