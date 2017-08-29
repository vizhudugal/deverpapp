'use strict';

var update_quality_parameter_multiple_value_dao = require('../dao/update_quality_parameter_multiple_value_dao');
exports.update_quality_parameter_multiple_value_controller_fn = function(req, res){
  update_quality_parameter_multiple_value_dao.update_quality_parameter_multiple_value_dao_fn(req.query,res, function(result){
  res.json({'status':"updated!"});
  // console.log("result value "+result.id);
  });
};
