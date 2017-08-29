'use strict';

var delete_quality_range_dao = require('../dao/delete_quality_range_dao');

exports.delete_quality_range_controller_fn = function(req, res){
  // console.log("inside controller"+JSON.stringify(req.body));
  delete_quality_range_dao.delete_quality_range_dao_fn(req.body, res, function(result){
  res.json({'status':"deleted!"});
  // console.log("result value "+result.id);
  });
};
