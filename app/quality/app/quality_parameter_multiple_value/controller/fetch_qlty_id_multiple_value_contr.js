'use strict';
var fetch_qlty_id_multiple_value_dao = require('../dao/fetch_qlty_id_multiple_value_dao');
exports.fetch_qlty_id_multiple_value_contr_fn = function(req, res){
  fetch_qlty_id_multiple_value_dao.fetch_qlty_id_multiple_value_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
