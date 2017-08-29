'use strict';

var fetch_sales_details_dao = require('../dao/fetch_sales_details_dao');

exports.fetch_sales_details_fn= function(req,res){
  fetch_sales_details_dao.fetch_sales_details_dao_fn(req.query, res, function(result){
    res.json();
  });
};
