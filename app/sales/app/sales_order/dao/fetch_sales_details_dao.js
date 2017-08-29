'use strict';

var fetch_sales_details_model = require('../model/salesorder_model');

exports.fetch_sales_details_dao_fn = function(salesorder,res){

  fetch_sales_details_model.where(
    {
      status:"orderplaced"
    }
  ).fetchAll()
  .then (function (salesorder) {    
      res.json(salesorder)
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
  });
}
