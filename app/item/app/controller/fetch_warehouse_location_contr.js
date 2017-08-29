'use strict';

var bookshelf = require('../model/database');
var fetch_warehouse_location_dao = require('../dao/fetch_warehouse_location_dao.js');

exports.fetch_warehouse_location = function(req,res){
  fetch_warehouse_location_dao.fetch_warehouse_dao_fn(req.query, res, function(warehouselocations){
    res.status(200).json({'whdata':warehouselocations});
  });
};
