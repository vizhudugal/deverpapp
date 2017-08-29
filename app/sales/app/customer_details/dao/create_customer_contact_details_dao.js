'use strict';

var new_customer_contact_details_model = require('../model/customer_model');
var bookshelf = require('../model/database');
var customer_contact_details_extended_model = bookshelf.model('contact_model');

exports.add_customer_contact_details_dao_fn = function(customer, result){
  customer_contact_details_extended_model.forge({
    mobile_1:customer.mobile1value,
    mobile_2:customer.mobile2value,
    phone_number:customer.phonenumbervalue,
    email:customer.emailvalue,
    website:customer.websitevalue
  }).save()
  .then (function (customer_id) {
    result(customer_id);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
