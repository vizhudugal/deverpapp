'use strict';

var create_item_quality_testing_dao = require('../dao/create_item_quality_testing_dao');

exports.create_item_quality_testing_controller_fn = function(req, res){
  // console.log("inside controller"+JSON.stringify(req.body));
  create_item_quality_testing_dao.create_item_quality_testing_dao_fn(req.query, res, function(result){
  res.json({'status':"Saved!"});
  // console.log("result value "+result.id);
  });
};
