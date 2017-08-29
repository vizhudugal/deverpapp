'use strict';

var inventory_item_available_quantity_dao = require('../dao/inventory_item_available_quantity_dao.js');

exports.inventory_item_quantity = function(req,res){
  inventory_item_available_quantity_dao.fetch_inventory_item_available_quantity_dao_fn(req.query, res, function(result){
    res.json({"itdata":result});
  });
};
