'use strict';

var create_stores_container_dao = require('../dao/create_stores_container_dao.js');

exports.create_stores_container = function(req,res){
  create_stores_container_dao.create_stores_container_dao_fn(req.body, res, function(result){
    res.json({"returnval":result});
  });
};
