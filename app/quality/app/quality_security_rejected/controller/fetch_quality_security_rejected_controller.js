'use strict';
var fetch_quality_security_rejected_dao = require('../dao/fetch_quality_security_rejected_dao');
exports.fetch_quality_security_rejected_controller_fn = function(req, res){
  console.log(req.query);
  fetch_quality_security_rejected_dao.fetch_quality_security_rejected_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
