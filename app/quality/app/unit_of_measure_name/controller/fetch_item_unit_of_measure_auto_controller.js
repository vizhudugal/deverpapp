'use strict';

// var fetch_address= require('../model/address_model');
var fetch_item_unit_of_measure_auto_dao = require('../dao/fetch_item_unit_of_measure_auto_dao');

exports.fetch_item_unit_of_measure_auto_controller_fn = function(req,res){
fetch_item_unit_of_measure_auto_dao.fetch_item_unit_of_measure_auto_dao_fn(res, function(result){
    // console.log("controlleres"+result);
    res.json(result);
  });
};
