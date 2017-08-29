'use strict';

var update_requisition_supplied_status_dao = require('../dao/update_requisition_supplied_status_dao.js');

exports.update_requisition_status = function(req,res){
  update_requisition_supplied_status_dao.update_requisition_supplied_status_dao_fn(req.body, res, function(result){
    res.json({"returnval":result});
  });
};
