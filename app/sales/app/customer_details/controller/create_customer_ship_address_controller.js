'use strict';

var create_customer_ship_address_dao = require('../dao/create_customer_ship_address_dao.js');

exports.add_customer_ship_address_fn = function(req, res){
  create_customer_ship_address_dao.add_customer_ship_address_dao_fn(req.query, res, function(result){
      res.json({data:result});
  });
};
