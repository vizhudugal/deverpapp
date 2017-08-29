'use strict';

var fetch_inward_reg_dao = require('../dao/fetch_inward_reg_dao');

exports.fetch_inward_reg_contr_fn = function(req, res){
  fetch_inward_reg_dao.fetch_inward_reg_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
