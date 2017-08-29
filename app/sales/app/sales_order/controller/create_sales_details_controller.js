'use strict';

var create_sales_details_dao = require('../dao/create_sales_details_dao.js');

exports.add_sales_details_fn = function(req, res){
  create_sales_details_dao.add_sales_details_dao_fn(req.query, res, function(result){
      res.json({'status':'success'});
  });
};
