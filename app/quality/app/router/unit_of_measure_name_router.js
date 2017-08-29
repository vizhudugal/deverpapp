'use strict';
module.exports = function(app)
 {
  // console.log("router");
  var fetch_item_unit_of_measure_auto_controller = require('../unit_of_measure_name/controller/fetch_item_unit_of_measure_auto_controller');

  app.route('/unit_of_measure_name')
  .get(fetch_item_unit_of_measure_auto_controller.fetch_item_unit_of_measure_auto_controller_fn)
}
