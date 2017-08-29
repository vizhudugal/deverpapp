'use strict';
module.exports = function(app) {
  var create_item_requisition_controller = require('../controller/create_item_requisition_controller.js');
    app.route('/requisitionsave')
    .post(create_item_requisition_controller.create_item_requisition)

  var fetch_requisition_selected_items_controller = require('../controller/fetch_requisition_selected_items_controller.js');
    app.route('/searchrequisitionitem')
    .get(fetch_requisition_selected_items_controller.fetch_selected_item)

  var fetch_created_requistion_approval_controller = require('../controller/fetch_created_requisition_approval_controller.js');
    app.route('/requisitionapproval')
    .get(fetch_created_requistion_approval_controller.fetch_created_requisition)

  var requisition_approval_response_controller = require('../controller/requisition_approval_response_controller.js');
    app.route('/requisitionresponse')
    .post(requisition_approval_response_controller.requisition_response)

  var fetch_approved_requisition_controller = require('../controller/fetch_approved_requisition_controller.js');
    app.route('/storesrequisitions')
    .get(fetch_approved_requisition_controller.fetch_approved_requisitions)

  var supply_requisition_controller = require('../controller/supply_requisition_controller.js');
    app.route('/requisitionitemsupply')
    .post(supply_requisition_controller.supply_requisitions)
}
