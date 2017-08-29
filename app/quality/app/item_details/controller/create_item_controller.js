'use strict';

var create_item_dao = require('../dao/create_item_dao.js');

exports.create_item = function(req, res){
  create_item_dao.create_item_dao_fn(req.body, res, function(result){
      res.json({'status':result});
  });
};
