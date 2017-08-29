'use strict';

var fetch_item_quality_testing_dao = require('../dao/fetch_item_quality_testing_dao');

exports.fetch_item_quality_testing_controller_fn = function(req, res){
  fetch_item_quality_testing_dao.fetch_item_quality_testing_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
