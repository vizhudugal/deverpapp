'use strict';

var create_quality_multiple_value_history_dao = require('../dao/create_quality_multiple_value_history_dao');

exports.create_quality_multiple_value_history_controller_fn = function(req, res){
  // console.log("inside controller"+JSON.stringify(req.body));
  create_quality_multiple_value_history_dao.create_quality_multiple_value_history_dao_fn(req.body, res, function(result){
  res.json({'status':result});
  // console.log("result value "+result.id);
  });
};
