'use strict';

var fetch_requistion_active_items_dao = require('../dao/fetch_requisition_active_items_dao.js');

exports.fetch_active_item = function(req,res){
  fetch_requistion_active_items_dao.fetch_active_item_dao_fn(req.query, res, function(result){
    res.json({"itemnames":result});
  });
};
