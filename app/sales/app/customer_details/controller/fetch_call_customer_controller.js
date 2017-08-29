'use strict';

var fetch_call_customer_dao = require('../dao/fetch_call_customer_dao');

exports.fetch_call_customer_fn = function(req,res){
  fetch_call_customer_dao.fetch_call_customer_dao_fn(req.query, res, function(result){
    res.json(result);
  });
};
