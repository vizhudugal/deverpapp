'use strict';

var new_quality_parameter_model = require('../model/quality_parameter_model');
var fetch_quality_parameter_dao = require('../dao/fetch_quality_parameter_dao');

exports.fetch_quality_parameter_controller_fn = function(req, res){
  fetch_quality_parameter_dao.fetch_quality_parameter_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
