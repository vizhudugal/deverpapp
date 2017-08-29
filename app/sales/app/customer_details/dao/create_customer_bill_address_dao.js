'use strict';

var bookshelf = require('../model/database');
var new_customer_bill_model = require('../model/customer_model');
var customer_billing_model = bookshelf.model('billing_model');
var customer_bill_model = bookshelf.model('bill_model');

exports.add_customer_bill_address_dao_fn = function(customer, res, result){
  customer_billing_model.forge({
                billing_id:customer.billid,
                customer_email:customer.billemail,
                country_code:customer.billcountry,
                state_code:customer.billstate,
                city_name:customer.billcity,
                street_name:customer.billstreet,
                pincode:customer.billpincodeno,
                mobile_number:customer.billmobile,
                created_by:customer.createdby,
                created_on:null,
                updated_by:customer.updatedby,
                updated_on:null
  }).save()
  .then (function (customer1) {
    customer_billing_model.fetchAll()
      .then(function(data){
         bookshelf.knex('od_sales_customer_billing_address').select('*').then(function(data){
           var lastInsertedBillingID;
           for (var i = 0; i < data.length; i++) {
             lastInsertedBillingID=data[i].billing_id;
           }
           customer_bill_model.forge({
             customer_id:customer.billcustomerid,
             billing_id :lastInsertedBillingID,
             created_by:customer.createdby,
             created_on:null,
             updated_by:customer.updatedby,
             updated_on:null
           }).save()
           .then (function (status) {
             result(status);
           })
           .catch(function (err) {
               res.status(500).json({error: true, data: {message: err.message}});
               console.log("Error:" +err);
           });
         })
      })
      .catch(function (err) {
          res.status(500).json({error: true, data: {message: err.message}});
          console.log("Error:" +err);
      });
    })
    .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
        console.log("Error:" +err);
    });
}
