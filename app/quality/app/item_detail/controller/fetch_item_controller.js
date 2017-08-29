'use strict';

var fetch_item_dao = require('../dao/fetch_item_dao.js');

exports.fetch_item = function(req,res){
  fetch_item_dao.fetch_item_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });
};
