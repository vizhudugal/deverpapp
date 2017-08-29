'use strict';

var fetch_qstrat_id_dao = require('../dao/fetch_qstrat_id_dao');

exports.fetch_qstrat_id_contr_fn = function(req, res){
  fetch_qstrat_id_dao.fetch_qstrat_id_dao_fn(req.query,res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
