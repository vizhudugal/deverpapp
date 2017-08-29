'use strict';

var create_item_details_dao = require('../dao/create_item_details_dao.js');

exports.add_item_details_fn = function(req, res){
  create_item_details_dao.add_item_details_dao_fn(req.body, res, function(result){
  res.json(result);
  });
};
