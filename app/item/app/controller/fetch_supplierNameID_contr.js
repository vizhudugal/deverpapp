'use strict';

var fetch_supplierNameID_dao = require('../dao/fetch_supplierNameID_dao.js');

exports.fetch_supplierNameID = function(req,res){
  fetch_supplierNameID_dao.fetch_supplierNameID_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });
};
