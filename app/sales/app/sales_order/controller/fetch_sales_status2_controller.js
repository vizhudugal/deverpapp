'use strict';

var fetch_sales_status2_dao = require('../dao/fetch_sales_status2_dao');

exports.fetch_sales_status2_fn= function(req,res){
  fetch_sales_status2_dao.fetch_sales_status2_dao_fn(req.query, res, function(result){
    res.json({"data":result});
  });
};
