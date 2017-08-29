'use strict';

var fetch_sales_id_dao = require('../dao/fetch_sales_id_dao');

exports.fetch_sales_id_fn= function(req,res){
  fetch_sales_id_dao.fetch_sales_id_dao_fn(req.query, res, function(result){
    res.json({"data":result});
  });
};
