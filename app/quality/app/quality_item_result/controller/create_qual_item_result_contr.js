'use strict';

var create_qual_item_result_dao = require('../dao/create_qual_item_result_dao');

exports.create_qual_item_result_contr_fn = function(req, res){
  // console.log("inside controller"+JSON.stringify(req.body));
  create_qual_item_result_dao.create_qual_item_result_dao_fn(req.body, res, function(result){
  res.json({'status':result});
  // console.log("result value "+result.id);
  });
};
