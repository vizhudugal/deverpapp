'use strict';

var delete_quality_multiple_value_dao = require('../dao/delete_quality_multiple_value_dao');

exports.delete_quality_multiple_value_controller_fn = function(req, res){
  console.log("inside controller"+JSON.stringify(req.query));
  delete_quality_multiple_value_dao.delete_quality_multiple_value_dao_fn(req.query, res, function(result){
  res.json({'status':result});
  // console.log("result value "+result.id);
  });
};
