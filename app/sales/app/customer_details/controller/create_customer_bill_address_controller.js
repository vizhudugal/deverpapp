'use strict';

var create_customer_bill_address_dao = require('../dao/create_customer_bill_address_dao.js');

exports.add_customer_bill_address_fn = function(req, res){
  create_customer_bill_address_dao.add_customer_bill_address_dao_fn(req.query, res, function(result){
      res.json({status:result});
  });
};
