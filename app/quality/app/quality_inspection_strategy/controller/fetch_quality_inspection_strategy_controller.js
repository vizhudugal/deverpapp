'use strict';

var fetch_quality_inspection_strategy_dao = require('../dao/fetch_quality_inspection_strategy_dao');

exports.fetch_quality_inspection_strategy_controller_fn = function(req, res){
  fetch_quality_inspection_strategy_dao.fetch_quality_inspection_strategy_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
