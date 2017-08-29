'use strict';

var fetch_approved_requisitions_dao = require('../dao/fetch_approved_requisition_dao.js');

exports.fetch_approved_requisitions = function(req,res){
  fetch_approved_requisitions_dao.fetch_approved_requisitions_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });
};
