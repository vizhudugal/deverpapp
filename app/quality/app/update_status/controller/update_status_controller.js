'use strict';

var update_status_dao = require('../dao/update_status_dao');

exports.update_status_controller_fn = function(req, res){
  update_status_dao.update_status_dao_fn(req.query,res, function(result){
  res.json({'status':"updated!"});
  // console.log("result value "+result.id);
  });
};
