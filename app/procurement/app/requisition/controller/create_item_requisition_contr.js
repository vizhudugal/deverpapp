'use strict';

var create_item_requisition_dao = require('../dao/create_item_requisition_dao.js');

exports.create_item_requisition = function(req,res){
  create_item_requisition_dao.create_requisition_item_dao_fn(req.query, res, function(result){
    res.json({"status":result});
  });
};
