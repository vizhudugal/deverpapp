'use strict';

var fetch_sales_pro_dao = require('../dao/fetch_sales_pro_dao');

exports.fetch_sales_pro_fn= function(req,res){
  fetch_sales_pro_dao.fetch_sales_pro_dao_fn(req.query, res, function(result){
      res.json({"data":result});
  });
};
