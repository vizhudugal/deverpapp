'use strict';

var fetch_requisition_selected_items_dao = require('../dao/fetch_requisition_selected_items_dao.js');

exports.fetch_selected_item = function(req,res){
  fetch_requisition_selected_items_dao.fetch_selected_item_dao_fn(req.query, res, function(result){
    res.json({"itemdetails":result});
  });
};
