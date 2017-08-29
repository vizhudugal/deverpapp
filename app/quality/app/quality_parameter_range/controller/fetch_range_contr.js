'use strict';
var fetch_range_dao = require('../dao/fetch_range_dao');
exports.fetch_range_contr_fn = function(req, res){
  fetch_range_dao.fetch_range_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
