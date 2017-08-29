'use strict';


var update_quality_security_rejected_dao = require('../dao/update_quality_security_rejected_dao');

exports.update_quality_security_rejected_controller_fn = function(req, res){
  update_quality_security_rejected_dao.update_quality_security_rejected_dao_fn(req.query,res, function(result){
console.log(req.query);
res.json({'status':"updated"});
  // console.log("result value "+result.id);
  });
};
