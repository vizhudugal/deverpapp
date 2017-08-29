'use strict';

var update_sales_check2_dao = require('../dao/update_sales_check2_dao.js');

exports.update_sales_check2_fn = function(req, res){
  update_sales_check2_dao.update_sales_check2_dao_fn(req.query, res, function(result){
      res.json({'status':'updated'});
  });
};
