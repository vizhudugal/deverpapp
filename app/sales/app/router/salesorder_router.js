'use strict';
module.exports = function(app) {

  var create_sales_details_controller = require('../sales_order/controller/create_sales_details_controller.js');
  var fetch_sales_details_controller = require('../sales_order/controller/fetch_sales_details_controller.js');
  var fetch_sales_status2_controller = require('../sales_order/controller/fetch_sales_status2_controller.js');
  var fetch_sales_status_controller = require('../sales_order/controller/fetch_sales_status_controller.js');
  var fetch_barchart_controller = require('../sales_order/controller/fetch_barchart_controller.js');
  var fetch_timeline_controller = require('../sales_order/controller/fetch_timeline_controller.js');
  var fetch_sales_id_controller = require('../sales_order/controller/fetch_sales_id_controller.js');
  var fetch_sales_id_details_controller = require('../sales_order/controller/fetch_sales_id_details_controller.js');
  var fetch_sales_pro_controller = require('../sales_order/controller/fetch_sales_pro_controller.js');
  var fetch_driver_details_controller = require('../sales_order/controller/fetch_driver_details_controller.js');
  var fetch_sales_order_veh_contr = require('../sales_order/controller/fetch_sales_order_veh_contr.js');
  var fetch_vehicle_in_contr = require('../sales_order/controller/fetch_vehicle_in_contr.js');
  var create_sales_veh_pro_controller = require('../sales_order/controller/create_sales_veh_pro_controller.js');
  var update_sales_controller = require('../sales_order/controller/update_sales_controller.js');
  var update_sales_check_controller = require('../sales_order/controller/update_sales_check_controller.js');
  var update_sales_check2_controller = require('../sales_order/controller/update_sales_check2_controller.js');
    app.route('/salesorder_details')
      .post(create_sales_details_controller.add_sales_details_fn)
      .get(fetch_sales_details_controller.fetch_sales_details_fn)
    app.route('/salesupdate')
      .post(update_sales_controller.update_sales_fn)
    app.route('/check')
      .post(update_sales_check_controller.update_sales_check_fn)
    app.route('/check2')
      .post(update_sales_check2_controller.update_sales_check2_fn)
    app.route('/sales_veh_pro')
      .post(create_sales_veh_pro_controller.add_sales_veh_pro_fn)

    app.route('/salesorder_status')
      .get(fetch_sales_status_controller.fetch_sales_status_fn)
    app.route('/salesorder_status2')
        .get(fetch_sales_status2_controller.fetch_sales_status2_fn)
    app.route('/barchartfetch')
      .get(fetch_barchart_controller.fetch_barchart_fn)

    app.route('/timelinefetch')
      .get(fetch_timeline_controller.fetch_timeline_fn)

    app.route('/fetchSalesid')
      .get(fetch_sales_id_controller.fetch_sales_id_fn)

    app.route('/fetchSalesDetails')
      .get(fetch_sales_id_details_controller.fetch_sales_id_details_fn)

    app.route('/fetchsalespro')
      .get(fetch_sales_pro_controller.fetch_sales_pro_fn)

    app.route('/driver_details')
    .get(fetch_driver_details_controller.fetch_driver_details_fn)

    app.route('/sales_order_veh')
      .get(fetch_sales_order_veh_contr.fetch_sales_order_veh_fn)

    app.route('/vehicle_in')
      .get(fetch_vehicle_in_contr.fetch_vehicle_in_fn)

  }
