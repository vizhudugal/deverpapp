'use strict';

var fetch_created_fg_requisition_approval_dao = require('../dao/fetch_created_fg_requisition_approval_dao.js');
var fetch_created_pg_requisition_approval_dao = require('../dao/fetch_created_pg_requisition_approval_dao.js');

exports.fetch_created_requisition = function(req,res){
  fetch_created_fg_requisition_approval_dao.fetch_created_fg_requisition_dao_fn(req.query, res, function(result){
    fetch_created_pg_requisition_approval_dao.fetch_created_pg_requisition_dao_fn(req.query, res, function(result1){
      res.json({"requisitions":result.concat(result1)});
    });
  });
};
