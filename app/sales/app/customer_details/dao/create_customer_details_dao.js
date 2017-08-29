'use strict';

var new_customer_details_model = require('../model/customer_model');
var bookshelf = require('../model/database');
var customer_extended_model = bookshelf.model('customer_extended_model');

exports.add_customer_details_dao_fn = function(customer, res, result){
  new_customer_details_model.forge({

    customer_name:customer.customernamevalue,
    customer_status:customer.statusvalue,
    building_no:customer.buildingnovalue,
    street_name:customer.streetnamevalue,
    address_1:customer.address1value,
    address_2:customer.address2value,
    address_type:customer.addresstypevalue,
    city:customer.cityvalue,
    district:customer.districtvalue,
    state:customer.statevalue,
    country:customer.countryvalue,
    pincode:customer.pincodevalue
  }).save()
  .then (function (customer_id) {
    result(customer_id);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
