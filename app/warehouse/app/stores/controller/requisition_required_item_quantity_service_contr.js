'use strict';

var requisition_required_item_quantity_service_dao = require('../dao/requisition_required_item_quantity_service_dao.js');

exports.requisition_required_item_quantity = function(req,res){
  requisition_required_item_quantity_service_dao.requisition_required_item_quantity_service_dao_fn(req.query, res, function(result){
    res.json({"quantity":result});
  });
};
