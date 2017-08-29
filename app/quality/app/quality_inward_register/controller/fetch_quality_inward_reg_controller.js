'use strict';

var fetch_quality_inward_reg_dao = require('../dao/fetch_quality_inward_reg_dao');

exports.fetch_quality_inward_reg_controller_fn = function(req, res){
  fetch_quality_inward_reg_dao.fetch_quality_inward_reg_dao_fn(req.query, res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
