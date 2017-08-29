'use strict';
var inward_reg_model = require('../model/inward_reg_model');
var bookshelf = require('../model/database');
exports.fetch_inward_reg_dao_fn = function(od_inward_reg, res, result){
inward_reg_model.where({
  inward_register_number:od_inward_reg.inward_register_number
}).fetchAll()
  .then (function (quality_parameter) {
    // console.log(JSON.stringify(quality_parameter));
    result(quality_parameter);
    // console.log(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
