'use strict';
var bookshelf = require('../model/database.js');
var stores_model = require('../model/stores_model.js');
var inventory = bookshelf.model('inventory_item_quantity');

exports.inventory_item_reduction_dao_fn = function(supplieditems, res, result){
  bookshelf.knex('od_item_inventory').where('item_id',supplieditems.itemid)
  .decrement('item_available_quantity', supplieditems.supplyquantity)
  .then(function(status){
    result("Available Quantity Updated")
  })
  .catch(function(err){
    result(err)
  })
}
