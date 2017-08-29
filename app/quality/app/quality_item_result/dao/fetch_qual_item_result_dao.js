'use strict';

var quality_item_result_model = require('../model/quality_item_result_model');
var bookshelf = require('../model/database');
exports.fetch_qual_item_result_dao_fn = function(od_inward_reg, res, result){
quality_item_result_model.where({
  inward_register_number:od_inward_reg.inward_register_number
}).fetch()
  .then (function (quality_parameter) {
    console.log(JSON.stringify(quality_parameter));
    result(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
