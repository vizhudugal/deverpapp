'use strict';

var new_quality_parameter_model = require('../model/quality_parameter_model');
var fetch_quality_parameter_auto_dao = require('../dao/fetch_quality_parameter_auto_dao');

exports.fetch_quality_parameter_auto_controller_fn = function(req, res){
  fetch_quality_parameter_auto_dao.fetch_quality_parameter_auto_dao_fn(res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
