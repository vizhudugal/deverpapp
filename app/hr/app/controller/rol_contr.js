'use strict';

var rol_dao = require('../dao/rol_dao.js');

exports.create_rol = function(req, res){
  rol_dao.create_rol_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_rol = function(req,res){
  rol_dao.fetch_rol_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};
