'use strict';
var bookshelf = require('../model/database.js');
var requisition_process_model = require('../model/stores_model.js');
var inventory = bookshelf.model('inventory_items');

exports.inventory_item_reduction_dao_fn = function(supplieditems, res, result){
  inventory.where({"item_id":supplieditems.itemid}).fetch()
  .then(function(availablequantity){
    var reducedQuantity=availablequantity.attributes.item_available_quantity-supplieditems.supplyquantity;
    bookshelf.knex('od_item_inventory').where('item_id',supplieditems.itemid)
    .update({'item_available_quantity':reducedQuantity})
    .then(function(status){
      result("Available Quantity Updated")
    })
    .catch(function(err){
      result(err)
    })
  })
  .catch(function(err){
    console.error(err);
    result(err)
  })
}
