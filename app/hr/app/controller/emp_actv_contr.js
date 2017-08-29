'use strict';

var emp_actv_dao = require('../dao/emp_actv_dao.js');

exports.login_emp_actv = function(req, res){
  emp_actv_dao.login_emp_actv_dao_fn(req.query, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.logout_emp_actv = function(req, res){
  emp_actv_dao.logout_emp_actv_dao_fn(req.query, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};
