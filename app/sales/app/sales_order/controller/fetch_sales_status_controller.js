'use strict';

var fetch_sales_status_dao = require('../dao/fetch_sales_status_dao');

exports.fetch_sales_status_fn= function(req,res){
  fetch_sales_status_dao.fetch_sales_status_dao_fn(req.query, res, function(result){
    res.json({"data":result});
  });
};
