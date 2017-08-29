'use strict';
var create_quality_parameter_multiple_value_dao = require('../dao/create_quality_parameter_multiple_value_dao');
exports.create_quality_parameter_multiple_value_controller_fn = function(req, res){
create_quality_parameter_multiple_value_dao.create_quality_parameter_multiple_value_dao_fn(req.query, res, function(result){
  res.json({'status':"success"});
  // console.log("result value "+result.id);
  });
};
