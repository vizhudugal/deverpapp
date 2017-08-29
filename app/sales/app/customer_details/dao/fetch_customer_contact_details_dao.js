'use strict';

var fetch_customer_contact_details = require('../model/customer_model');
var bookshelf = require('../model/database');
var fetch_customer_contact_details_model = bookshelf.model('contact_model');

exports.fetch_customer_contact_details_dao_fn = function(customer,res){
  fetch_customer_contact_details_model.forge({
    mobile_1:customer.mobile1value
    }
  ).fetch()
  .then (function (customer) {
      res.json(customer)
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
  });
}
