'use strict';
var bookshelf = require('../model/database');
var stores_model = require('../model/stores_model.js');
var itemStorage=bookshelf.model('item_storage_location');

exports.create_item_storage_dao_fn = function(item_storage_detail, res, result){
  itemStorage.forge({item_id: "item_storage_detail.",
                      item_qty: "item_storage_detail.",
                      store_id: "item_storage_detail.",
                      store_area_id: "item_storage_detail.",
                      container_type_id: "item_storage_detail.",
                      container_id: "item_storage_detail.",
                      location_id: "item_storage_detail."}).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
    console.log("Error: "+err);
  });
}
