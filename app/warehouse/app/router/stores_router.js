'use strict';
module.exports = function(app) {
  var fetch_approved_requisition_contr = require('../stores/controller/fetch_approved_requisition_contr.js');
  app.route('/storesrequisitions')
  .get(fetch_approved_requisition_contr.fetch_approved_requisitions)

  var supply_requisition_contr = require('../stores/controller/supply_requisition_contr.js');
  app.route('/requisitionitemsupply')
  .post(supply_requisition_contr.supply_requisitions)

  var requisition_required_item_quantity_service_contr = require('../stores/controller/requisition_required_item_quantity_service_contr.js');
  app.route('/requisitionRequiredItemquantityService')
  .get(requisition_required_item_quantity_service_contr.requisition_required_item_quantity)

  var inventory_item_available_quantity_contr = require('../stores/controller/inventory_item_available_quantity_contr.js');
  app.route('/productioninventory')
  .post(inventory_item_available_quantity_contr.inventory_item_quantity)

  // var create_stores_container_contr = require('../stores/controller/create_stores_container_contr.js');
  // var fetch_stores_container_contr = require('../stores/controller/fetch_stores_container_contr.js');
  // app.route('/storesContainer')
  // .post(create_stores_container_contr.create_stores_container)
  // .get(fetch_stores_container_contr.fetch_stores_container)
  //
  // var create_item_storage_location_contr = require('../stores/controller/create_item_storage_location_contr.js');
  // var fetch_item_storage_location_contr = require('../stores/controller/fetch_item_storage_location_contr.js');
  // app.route('/itemStorageLocation')
  // .post(create_item_storage_location_contr.create_item_storage)
  // .get(fetch_item_storage_location_contr.fetch_item_storage)
}
