'use strict';

var create_quality_inspection_strategy_dao = require('../dao/create_quality_inspection_strategy_dao');

exports.create_quality_inspection_strategy_controller_fn = function(req, res){
  // console.log("inside controller"+JSON.stringify(req.body));
  create_quality_inspection_strategy_dao.create_quality_inspection_strategy_dao_fn(req.query, res, function(result){
  res.json({'status':"success"});
  // console.log("result value "+result.id);
  });
};
