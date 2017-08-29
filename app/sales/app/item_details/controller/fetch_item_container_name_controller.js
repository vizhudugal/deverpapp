'use strict';

var fetch_item_container_name_dao = require('../dao/fetch_item_container_name_dao');

exports.fetch_item_container_name_fn = function(req,res){
  fetch_item_container_name_dao.fetch_item_container_name_dao_fn(req.query, res, function(result){
    res.json(result);
  });
};
