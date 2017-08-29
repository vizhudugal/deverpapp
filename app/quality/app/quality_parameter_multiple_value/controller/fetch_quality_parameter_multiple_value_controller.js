'use strict';
var fetch_quality_parameter_multiple_value_dao = require('../dao/fetch_quality_parameter_multiple_value_dao');
exports.fetch_quality_parameter_multiple_value_controller_fn = function(req, res){
  fetch_quality_parameter_multiple_value_dao.fetch_quality_parameter_multiple_value_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
