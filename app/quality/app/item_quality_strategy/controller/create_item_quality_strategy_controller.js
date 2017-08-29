'use strict';

var create_item_quality_strategy_dao = require('../dao/create_item_quality_strategy_dao');

exports.create_item_quality_strategy_controller_fn = function(req, res){
  // console.log("inside controller"+JSON.stringify(req.body));
  create_item_quality_strategy_dao.create_item_quality_strategy_dao_fn(req.body, res, function(result){
  res.json({'status':"success"});
  // console.log("result value "+result.id);
  });
};
