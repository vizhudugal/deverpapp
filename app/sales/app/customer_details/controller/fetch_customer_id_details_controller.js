'use strict';

var fetch_customer_id_details_dao = require('../dao/fetch_customer_id_details_dao');

exports.fetch_customer_id_details_fn = function(req,res){
  fetch_customer_id_details_dao.fetch_customer_id_details_dao_fn(req.query, res, function(result){
      res.json({data:result});
  });
};
