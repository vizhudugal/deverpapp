'use strict';

var emp_dao = require('../dao/emp_dao.js');

exports.create_emp= function(req, res){
  emp_dao.create_emp_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_emp = function(req,res){
  emp_dao.fetch_emp_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};

exports.create_emp_cont = function(req, res){
emp_dao.create_emp_cont_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_emp_cont = function(req,res){
  emp_dao.fetch_emp_cont_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};
