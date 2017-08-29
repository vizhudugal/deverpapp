'use strict';

var new_customer_ship_address_model = require('../model/customer_model');
var bookshelf = require('../model/database');
var customer_shipping_model = bookshelf.model('shipping_model');
var customer_shipping_mapping_model = bookshelf.model('ship_model');
exports.add_customer_ship_address_dao_fn = function(customer, res, result){
  customer_shipping_model.forge({
                  customer_email:customer.shipemail,
                  country_code:customer.shipcountry,
                  state_code:customer.shipstate,
                  city_name:customer.shipcity,
                  street_name:customer.shipstreet,
                  pincode:customer.shippincodeno,
                  mobile_number:customer.shipmobile,
                  created_by:customer.createdby,
                  created_on:null,
                  updated_by:customer.updatedby,
                  updated_on:null
  }).save()
  .then (function (customer_id) {
    customer_shipping_model.fetchAll()
      .then(function(data){
         bookshelf.knex('od_sales_customer_shipping_address').select('*').then(function(data){
           var lastInsertedShippingID;
           for (var i = 0; i < data.length; i++) {
             lastInsertedShippingID=data[i].shipping_id;
           }
           customer_shipping_mapping_model.forge({
             customer_id:customer.shipid,
             shipping_id :lastInsertedShippingID,
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
      // console.log(Error: +err);
  });
}
