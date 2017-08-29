'use strict';

// var fetch_address= require('../model/address_model');
var fetch_item_container_name_dao = require('../dao/fetch_item_container_name_dao');

exports.fetch_item_container_name_controller_fn = function(req,res){
console.log("controller"+req);
  fetch_item_container_name_dao.fetch_item_container_name_dao_fn(req.query, res, function(result){
    // console.log("controlleres"+result);
    res.json(result);
  });
};
