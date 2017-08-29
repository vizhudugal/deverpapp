'use strict';

var new_quality_parameter_model = require('../model/quality_parameter_model');
var update_quality_parameter_dao = require('../dao/update_quality_parameter_dao');

exports.update_quality_parameter_controller_fn = function(req, res){
  update_quality_parameter_dao.update_quality_parameter_dao_fn(req.query,res, function(result){
  res.json({'status':result});
  // console.log("result value "+result.id);
  });
};
