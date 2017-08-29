'use strict';

var fetch_created_item_dao = require('../dao/fetch_created_item_dao.js');

exports.fetch_ceo_item = function(req,res){
  fetch_created_item_dao.fetch_ceo_item_dao_fn(req.query, res, function(result,result1){
    res.json({"returnval":result,"returnfg":result1});
  });
};
