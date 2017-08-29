'use strict';

var ceo_item_approval_response_dao = require('../dao/ceo_item_approval_response_dao.js');

exports.ceo_item_approval_response = function(req, res){
  ceo_item_approval_response_dao.ceo_item_approval_response_dao_fn(req.query, res, function(result){
      res.json({'status':result});
  });
};
