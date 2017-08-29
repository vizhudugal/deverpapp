'use strict';

var update_sales_check_dao = require('../dao/update_sales_check_dao.js');

exports.update_sales_check_fn = function(req, res){
  update_sales_check_dao.update_sales_check_dao_fn(req.query, res, function(result){
      res.json({'status':'updated'});
  });
};
