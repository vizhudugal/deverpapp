
'use strict';
var fetch_item_quality_strategy_dao = require('../dao/fetch_item_quality_strategy_dao');
exports.fetch_item_quality_strategy_controller_fn = function(req, res){
  fetch_item_quality_strategy_dao.fetch_item_quality_strategy_dao_fn(req.query,res, function(result){
// console.log("result value "+JSON.stringify(result));
  res.json(result);
  // console.log("result value "+result.id);
  });
};
