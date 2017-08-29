'use strict';

var fetch_qlty_flag_dao = require('../dao/fetch_qlty_flag_dao');

exports.fetch_qlty_flag_contr_fn = function(req, res){
  fetch_qlty_flag_dao.fetch_qlty_flag_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
