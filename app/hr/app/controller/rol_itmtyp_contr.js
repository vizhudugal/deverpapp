'use strict';

var rol_itmtyp_dao = require('../dao/rol_itmtyp_dao.js');

exports.create_rol_itmtyp = function(req, res){
  rol_itmtyp_dao.create_rol_itmtyp_dao_fn(req.body, res, function(result){
    console.log(" REquest "+JSON.stringify(req.body));
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_rol_itmtyp = function(req,res){
  rol_itmtyp_dao.fetch_rol_itmtyp_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};
