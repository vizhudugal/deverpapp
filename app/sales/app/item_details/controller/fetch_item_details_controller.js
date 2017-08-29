'use strict';

var fetch_item_details_dao = require('../dao/fetch_item_details_dao');

exports.fetch_item_details_fn = function(req,res){
  fetch_item_details_dao.fetch_item_details_dao_fn(req.query, res, function(result){
    res.json({"data":result});
  });
};
