'use strict';
module.exports = function(app) {

  var create_customer_location_details_controller = require('../customer_details/controller/create_customer_location_details_controller.js');
  var create_customer_details_controller = require('../customer_details/controller/create_customer_details_controller.js');
  var fetch_customer_location_details_controller = require('../customer_details/controller/fetch_customer_location_details_controller.js');
  var fetch_customer_details_controller = require('../customer_details/controller/fetch_customer_details_controller.js');
  var fetch_customer_bill_address_controller = require('../customer_details/controller/fetch_customer_bill_address_controller.js');
  var fetch_customer_ship_address_controller = require('../customer_details/controller/fetch_customer_ship_address_controller.js');
  var fetch_customer_id_details_controller = require('../customer_details/controller/fetch_customer_id_details_controller.js');
  var fetch_call_customer_controller = require('../customer_details/controller/fetch_call_customer_controller.js');
  var create_customer_ship_address_controller = require('../customer_details/controller/create_customer_ship_address_controller.js');
  var create_customer_bill_address_controller = require('../customer_details/controller/create_customer_bill_address_controller.js');

    app.route('/customer')
      .post(create_customer_details_controller.add_customer_details_fn)
      .get(fetch_customer_details_controller.fetch_customer_details_fn)
    app.route('/callcustomer')
    
      .get(fetch_call_customer_controller.fetch_call_customer_fn)

    app.route('/customer_location')
      .get(fetch_customer_location_details_controller.fetch_customer_location_details_fn)

    app.route('/fetchCustomerBilladdress')
      .post(fetch_customer_bill_address_controller.fetch_customer_bill_address_fn)

    app.route('/fetchCustomerShipaddress')
      .post(fetch_customer_ship_address_controller.fetch_customer_ship_address_fn)

    app.route('/Billaddress')
      .post(create_customer_bill_address_controller.add_customer_bill_address_fn)

    app.route('/Shipaddress')
      .post(create_customer_ship_address_controller.add_customer_ship_address_fn)

    app.route('/customer_id')
      .get(fetch_customer_id_details_controller.fetch_customer_id_details_fn)

  }
