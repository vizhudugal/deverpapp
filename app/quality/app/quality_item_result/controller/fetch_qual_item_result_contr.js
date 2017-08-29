'use strict';

var fetch_qual_item_result_dao = require('../dao/fetch_qual_item_result_dao');

exports.fetch_qual_item_result_contr_fn = function(req, res){
  fetch_qual_item_result_dao.fetch_qual_item_result_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
