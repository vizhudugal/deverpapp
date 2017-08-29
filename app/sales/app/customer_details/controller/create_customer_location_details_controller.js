'use strict';

var create_customer_location_details_dao = require('../dao/create_customer_location_details_dao.js');

exports.add_customer_location_details_fn = function(req, res){
  create_customer_location_details_dao.add_customer_location_details_dao_fn(req.body, function(result){
      res.json({'status':'success'});
  });
};
