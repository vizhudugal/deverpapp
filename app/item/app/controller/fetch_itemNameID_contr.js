'use strict';

var fetch_itemNameID_dao = require('../dao/fetch_itemNameID_dao.js');

exports.fetch_itemNameID = function(req,res){
  fetch_itemNameID_dao.fetch_itemNameID_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });
};
