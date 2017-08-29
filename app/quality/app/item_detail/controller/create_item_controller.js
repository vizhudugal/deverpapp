'use strict';
var create_item_model = require('../model/create_item_model.js');
var create_item_dao = require('../dao/create_item_dao.js');

exports.create_item = function(req, res){
  create_item_dao.create_item_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'status':'Item Created'});
    }
    else {
      res.json({'status':'Error while Creating Item'});
    }
  });
};
