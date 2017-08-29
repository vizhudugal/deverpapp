'use strict';

var requisition_approval_response_dao = require('../dao/requisition_approval_response_dao.js');

exports.requisition_response = function(req,res){
  requisition_approval_response_dao.requisition_approval_response(req.query, res, function(result){
    res.json({"returnval":result});
  });
};
