'use strict';
module.exports = function(app) {

  var create_item_controller = require('../item_details/controller/create_item_controller.js');
    app.route('/insertitems')
    .post(create_item_controller.create_item)

  var fetch_item_controller = require('../item_details/controller/fetch_item_controller.js');
    app.route('/searchitem')
    .get(fetch_item_controller.fetch_item)

    var fetch_item_name_auto_controller = require('../item_details/controller/fetch_item_name_auto_controller');
      app.route('/search_item_name_auto')
      .get(fetch_item_name_auto_controller.fetch_item_name_auto_controller_fn)

  var fetch_ceo_item_controller = require('../item_details/controller/fetch_ceo_item_controller.js');
    app.route('/ceoitemsearch')
    .get(fetch_ceo_item_controller.fetch_ceo_item)

  var fetch_item_container_controller = require('../item_details/controller/fetch_item_container_controller.js');
    app.route('/itemContainer')
    .get(fetch_item_container_controller.fetch_item_container)

  var fetch_item_type_controller = require('../item_details/controller/fetch_item_type_controller.js');
    app.route('/itemType')
    .get(fetch_item_type_controller.fetch_item_type)

  var fetch_item_unitofmeasure_controller = require('../item_details/controller/fetch_item_unitofmeasure_controller.js');
    app.route('/itemUnit')
    .get(fetch_item_unitofmeasure_controller.fetch_item_unitofmeasure)
// ****fetch container name unit of measure name**********
  var fetch_item_container_name_controller = require('../item_details/controller/fetch_item_container_name_controller');
    app.route('/container_name')
    .get(fetch_item_container_name_controller.fetch_item_container_name_controller_fn)




  var fetch_item_names_supplier_mapping_contr = require('../item_details/controller/fetch_item_names_supplier_mapping_contr.js');
    app.route('/mapitem')
    .get(fetch_item_names_supplier_mapping_contr.fetch_item_names)

  var fetch_supplier_names_supplier_mapping_contr = require('../item_details/controller/fetch_supplier_names_supplier_mapping_contr.js');
    app.route('/mapsupplier')
    .get(fetch_supplier_names_supplier_mapping_contr.fetch_supplier_names)

  var map_item_supplier_contr = require('../item_details/controller/map_item_supplier_contr.js');
    app.route('/fixsupplier')
    .post(map_item_supplier_contr.fix_item_supplier)
}
