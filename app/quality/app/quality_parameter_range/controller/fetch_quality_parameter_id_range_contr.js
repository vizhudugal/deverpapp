'use strict';
var fetch_quality_parameter_id_range_dao = require('../dao/fetch_quality_parameter_id_range_dao');
exports.fetch_quality_parameter_id_range_contr_fn = function(req, res){
  fetch_quality_parameter_id_range_dao.fetch_quality_parameter_id_range_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
