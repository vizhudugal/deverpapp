'use strict';

var create_fg_item_dao = require('../dao/create_fg_item_dao.js');
var create_pg_item_dao = require('../dao/create_pg_item_dao.js');

exports.create_item = function(req, res){
  if(req.query.type=="FG"){
    create_fg_item_dao.create_fg_item_dao_fn(req.query, res, function(result){
        res.json({'status':result});
    });
  }
  else {
    create_pg_item_dao.create_pg_item_dao_fn(req.query, res, function(result){
        res.json({'status':result});
    });
  }
};
