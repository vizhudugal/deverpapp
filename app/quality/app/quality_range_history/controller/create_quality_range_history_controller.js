'use strict';

var create_quality_range_history_dao = require('../dao/create_quality_range_history_dao');

exports.create_quality_range_history_controller_fn = function(req, res){
  // console.log("inside controller"+JSON.stringify(req.body));
  create_quality_range_history_dao.create_quality_range_history_dao_fn(req.query, res, function(result){
console.log(JSON.stringify(req.body));
  res.json({'status':"success"});
  // console.log("result value "+result.id);
  });
};
