'use strict';

var fetch_driver_details_dao = require('../dao/fetch_driver_details_dao');

exports.fetch_driver_details_fn= function(req,res){
  fetch_driver_details_dao.fetch_driver_details_dao_fn(req.query, res, function(result){
      res.json({data:result});
  });
};
