'use strict';

var update_quality_range_dao = require('../dao/update_quality_range_dao');

exports.update_quality_range_controller_fn = function(req, res){
  update_quality_range_dao.update_quality_range_dao_fn(req.query,res, function(result){
  res.json({'status':"updated!"});
  // console.log("result value "+result.id);
  });
};
