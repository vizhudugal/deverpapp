'use strict';

var create_quality_inward_reg_dao = require('../dao/create_quality_inward_reg_dao');

exports.create_quality_inward_reg_controller_fn = function(req, res){
create_quality_inward_reg_dao.create_quality_inward_reg_dao_fn(req.body, res, function(result){
  res.json({'status':"success"});
  // console.log("result value "+result.id);
  });
};
