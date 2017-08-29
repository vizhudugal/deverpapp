'use strict';
var create_quality_security_rejected_dao = require('../dao/create_quality_security_rejected_dao');
exports.create_quality_security_rejected_controller_fn = function(req, res){
create_quality_security_rejected_dao.create_quality_security_rejected_dao_fn(req.query, res, function(result){
  res.json({'status':"success"});
  // console.log("result value "+result.id);
  });
};
