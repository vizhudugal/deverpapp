'use strict';
module.exports = function(app) {

  var fetch_item_container_contr = require('../controller/fetch_item_container_contr.js');
  app.route('/itemContainer')
  .get(fetch_item_container_contr.fetch_item_container)

  var fetch_item_type_contr = require('../controller/fetch_item_type_contr.js');
  app.route('/itemType')
  .get(fetch_item_type_contr.fetch_item_type)

  var fetch_item_group_contr = require('../controller/fetch_item_group_contr.js');
  app.route('/itemGroup')
  .get(fetch_item_group_contr.fetch_item_group)

  var fetch_item_unitofmeasure_contr = require('../controller/fetch_item_unitofmeasure_contr.js');
  app.route('/itemUnit')
  .get(fetch_item_unitofmeasure_contr.fetch_item_unitofmeasure)

  var fetch_warehouse_location_contr = require('../controller/fetch_warehouse_location_contr.js');
  app.route('/warehousedetails')
  .post(fetch_warehouse_location_contr.fetch_warehouse_location)

  var fetch_itemNameID_contr = require('../controller/fetch_itemNameID_contr.js');
  app.route('/autocompleteitemdetails')
  .get(fetch_itemNameID_contr.fetch_itemNameID)

  var create_item_contr = require('../controller/create_item_contr.js');
  app.route('/insertitems')
  .post(create_item_contr.create_item)

  var fetch_item_contr = require('../controller/fetch_item_contr.js');
  app.route('/searchitem')
  .get(fetch_item_contr.fetch_item)

  var fetch_created_item_contr = require('../controller/fetch_created_item_contr.js');
  app.route('/ceoitemsearch')
  .get(fetch_created_item_contr.fetch_ceo_item)

  var ceo_item_approval_response_contr = require('../controller/ceo_item_approval_response_contr.js');
  app.route('/ceoresponse')
  .post(ceo_item_approval_response_contr.ceo_item_approval_response)

  // var fetch_item_names_supplier_mapping_contr = require('../controller/fetch_item_names_supplier_mapping_contr.js');
  // app.route('/mapitem')
  // .get(fetch_item_names_supplier_mapping_contr.fetch_item_names)
  //
  // var fetch_supplier_names_supplier_mapping_contr = require('../controller/fetch_supplier_names_supplier_mapping_contr.js');
  // app.route('/mapsupplier')
  // .get(fetch_supplier_names_supplier_mapping_contr.fetch_supplier_names)

  var fetch_supplierNameID_contr = require('../controller/fetch_supplierNameID_contr.js');
  app.route('/autocompletesuppliername')
  .get(fetch_supplierNameID_contr.fetch_supplierNameID)

  var map_item_supplier_contr = require('../controller/map_item_supplier_contr.js');
  app.route('/fixItemSupplier')
  .post(map_item_supplier_contr.fix_item_supplier)

}
