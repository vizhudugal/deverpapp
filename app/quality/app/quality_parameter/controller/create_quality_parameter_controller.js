'use strict';

var new_quality_parameter_model = require('../model/quality_parameter_model');
var quality_parameter_insert_dao = require('../dao/create_quality_parameter_dao');

exports.create_quality_parameter_controller_fn = function(req, res){
  // console.log("inside controller"+JSON.stringify(req.body));
  quality_parameter_insert_dao.create_quality_parameter_dao_fn(req.body, res, function(result){
  res.json({'status':"success"});
  // console.log("result value "+result.id);
  });
};
