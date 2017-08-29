'use strict';

var emp_rol_dpmt_dao = require('../dao/emp_rol_dpmt_dao.js');

exports.create_emp_rol_dpmt = function(req, res){
  emp_rol_dpmt_dao.create_emp_rol_dpmt_dao_fn(req.body, res, function(result){
    if(result.id==0){
      res.json({'returnval':result});
    }
    else {
      res.json({'returnval':result});
    }
  });
};

exports.fetch_emp_rol_dpmt = function(req,res){
  emp_rol_dpmt_dao.fetch_emp_rol_dpmt_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};
// exports.fetch_rol_mnpag_perm = function(req,res){
//   emp_rol_dpmt_dao.fetch_rol_mnpag_perm_dao_fn(req.query, res, function(result){
//     res.json({"returnval":result});
//   });
//
// };
