'use strict';

var supply_requisition_dao = require('../dao/supply_requisition_dao.js');

exports.supply_requisitions = function(req,res){
  supply_requisition_dao.supply_requisition_item_dao_fn(req.body, res, function(result){
    res.json({"returnval":result});
  });
};
