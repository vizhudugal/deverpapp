'use strict';

var fetch_customer_ship_address_dao = require('../dao/fetch_customer_ship_address_dao');

exports.fetch_customer_ship_address_fn= function(req,res){
  fetch_customer_ship_address_dao.fetch_customer_ship_address_dao_fn(req.query, res, function(result){
      res.json({"data":result});
  });
};
