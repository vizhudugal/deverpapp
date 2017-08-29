'use strict';

var create_inward_reg_dao = require('../dao/create_inward_reg_dao');

exports.create_inward_reg_contr_fn = function(req, res){
  // console.log("inside controller"+JSON.stringify(req.body));
  create_inward_reg_dao.create_inward_reg_dao_fn(req.query, res, function(result){
  res.json({'status':result});
  // console.log("result value "+result.id);
  });
};
