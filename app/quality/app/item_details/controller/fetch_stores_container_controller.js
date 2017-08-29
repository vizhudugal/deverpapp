'use strict';

var fetch_stores_container_dao = require('../dao/fetch_stores_container_dao.js');

exports.fetch_stores_container = function(req,res){
  fetch_stores_container_dao.fetch_stores_container_dao_fn(req.query, res, function(result){
    if(result.id==1){
      res.json({'status': result});
    }
    else {
      res.json({'status':'No data!'});
    }
  });
};
