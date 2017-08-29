'use strict';
module.exports = function(app) {

  var create_item_details_controller = require('../item_details/controller/create_item_details_controller.js');
  var fetch_item_details_controller = require('../item_details/controller/fetch_item_details_controller.js');
  var fetch_item_container_name_controller = require('../item_details/controller/fetch_item_container_name_controller.js');
  var fetch_item_unit_of_measure_controller = require('../item_details/controller/fetch_item_unit_of_measure_controller.js');
  var fetch_item_id_details_controller = require('../item_details/controller/fetch_item_id_details_controller.js');

    app.route('/item')
      .post(create_item_details_controller.add_item_details_fn)
      .get(fetch_item_details_controller.fetch_item_details_fn)

    app.route('/unitofmeasurename')
      .get(fetch_item_unit_of_measure_controller.fetch_item_unit_of_measure_fn)

    app.route('/containername')
      .get(fetch_item_container_name_controller.fetch_item_container_name_fn)

    app.route('/item_id')
      .get(fetch_item_id_details_controller.fetch_item_id_details_fn)
}
