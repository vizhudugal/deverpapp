'use strict';

var fetch_customer_location_details = require('../model/customer_model');
var bookshelf = require('../model/database');

exports.fetch_customer_location_details_dao_fn = function(customer,res,result){
    console.log("dao"+JSON.stringify(customer));
    bookshelf.knex('md_sales_customer').select('*')
    .where({'customer_name':customer.customername})

    .then (function (customer) {
        var array=[];
        for(var i=0;i<customer.length;i++){
          array.push({"text":customer[i].city,"value":customer[i].customer_name});
        }
        result(array)
    })

    .catch(function (err) {
      console.error(err);
      res.status(500).json({error: true, data: {message: err.message}});
    });
}
