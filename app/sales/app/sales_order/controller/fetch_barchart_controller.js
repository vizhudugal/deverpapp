'use strict';

var fetch_barchart_dao = require('../dao/fetch_barchart_dao');

exports.fetch_barchart_fn= function(req,res){
  fetch_barchart_dao.fetch_barchart_dao_fn(req.query, res, function(result){
      res.json({data:result});
  });
};
