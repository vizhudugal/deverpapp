'use strict';

var create_item_storage_location_dao = require('../dao/create_item_storage_location_dao.js');

exports.create_item_storage = function(req,res){
  create_item_storage_location_dao.create_item_storage_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'status': result});
    }
    else {
      res.json({'status':'Error'});
    }
  });
};
