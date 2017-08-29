'use strict';

var create_sales_veh_pro_dao = require('../dao/create_sales_veh_pro_dao.js');

exports.add_sales_veh_pro_fn = function(req, res){
  create_sales_veh_pro_dao.add_sales_veh_pro_dao_fn(req.query, res, function(result){
      res.json({'status':'success'});
  });
};
