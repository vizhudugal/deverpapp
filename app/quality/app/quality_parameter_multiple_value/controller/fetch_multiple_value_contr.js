'use strict';
var fetch_multiple_value_dao = require('../dao/fetch_multiple_value_dao');
exports.fetch_multiple_value_contr_fn = function(req, res){
  fetch_multiple_value_dao.fetch_multiple_value_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
