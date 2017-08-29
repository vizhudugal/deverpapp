'use strict';

var dpmt_dao = require('../dao/dpmt_dao.js');

exports.create_dpmt = function(req, res){
  dpmt_dao.create_dpmt_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_dpmt = function(req,res){
  dpmt_dao.fetch_dpmt_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};
