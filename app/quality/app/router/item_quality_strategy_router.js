'use strict';
module.exports = function(app)
 {
  var create_item_quality_strategy_controller = require('../item_quality_strategy/controller/create_item_quality_strategy_controller');
  var fetch_item_quality_strategy_controller = require('../item_quality_strategy/controller/fetch_item_quality_strategy_controller');
  // nodeDev Routes
  app.route('/item_quality_strategy')
  .post(create_item_quality_strategy_controller.create_item_quality_strategy_controller_fn)
  .get(fetch_item_quality_strategy_controller.fetch_item_quality_strategy_controller_fn)
}
