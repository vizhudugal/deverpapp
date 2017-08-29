'use strict';

var fetch_item_storage_location_dao = require('../dao/fetch_item_storage_location_dao.js');

exports.fetch_item_storage = function(req,res){
  fetch_item_storage_location_dao.fetch_item_storage_location_dao_fn(req.query, res, function(result){
      res.json({'status': result});
  });
};
