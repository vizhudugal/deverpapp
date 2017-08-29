'use strict';

var fetch_barchart_model = require('../model/salesorder_model');
var bookshelf = require('../model/database');

exports.fetch_sales_id_dao_fn = function(salesorder,res,result){

    bookshelf.knex('md_sales_customer as t1').select('t1.*','t2.*')
    .leftJoin('od_sales_sales_order as t2', 't2.customer_id', 't1.customer_id')
    .where({'t1.customer_name':salesorder.customername})

    .then (function (salesorder) {
        result(salesorder)
    })

    .catch(function (err) {
      console.error(err);
      res.status(500).json({error: true, data: {message: err.message}});
    });
}
