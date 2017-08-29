'use strict';
var database = require('../model/database');
var stores_model = require('../model/stores_model.js');
var inventoryItemQuantity=database.model('inventory_item_quantity');

exports.fetch_inventory_item_available_quantity_dao_fn =function(req,res,result){
  inventoryItemQuantity.where('item_id',req.inventory_itemid).fetch()
  .then(function(data){
    result(data);
  })
  .catch(function(err){
    console.error(err);
    result(err);
  })
}
