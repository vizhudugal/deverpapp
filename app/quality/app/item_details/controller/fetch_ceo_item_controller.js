'use strict';

var fetch_ceo_item_dao = require('../dao/fetch_ceo_item_dao.js');

exports.fetch_ceo_item = function(req,res){
  fetch_ceo_item_dao.fetch_ceo_item_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });
};
