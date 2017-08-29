'use strict';
var bookshelf = require('../model/database');
var stores_model = require('../model/stores_model.js');
var storesContainer=bookshelf.model('stores_container');

exports.create_stores_container_dao_fn = function(stores_container_detail, res, result){
  storesContainer.forge({store_container_type_id: "stores_container_detail1.",
                      store_container_type_name: "stores_container_detail."}).save()
  .then (function (status) {
    result(status);
  })
  .catch(function (err) {
    console.log("Error: "+err);
  });
}
