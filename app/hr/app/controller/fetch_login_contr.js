'use strict';

var fetch_login_dao = require('../dao/fetch_login_dao.js');

exports.fetch_login = function(req,res){
  fetch_login_dao.fetch_login_dao_fn(req.query, res, function(result){
    res.json({"returnval":result});
  });

};
