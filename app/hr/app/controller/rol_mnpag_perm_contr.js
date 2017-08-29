'use strict';

var rol_mnpag_perm_dao = require('../dao/rol_mnpag_perm_dao.js');

exports.create_rol_mnpag_perm = function(req, res){
  rol_mnpag_perm_dao.create_rol_mnpag_perm_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_rol_mnpag_perm = function(req,res){
  rol_mnpag_perm_dao.fetch_rol_mnpag_perm_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};
