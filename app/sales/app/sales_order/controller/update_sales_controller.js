'use strict';

var update_sales_dao = require('../dao/update_sales_dao.js');

exports.update_sales_fn = function(req, res){
    update_sales_dao.update_sales_dao_fn(req.query, res, function(result){
      res.json({'status':'updated'});
  });
};
