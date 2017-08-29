'use strict';

var quality_parameter_multiple_value_model = require('../model/quality_parameter_multiple_value_model');
var bookshelf = require('../model/database');
exports.fetch_quality_parameter_multiple_value_dao_fn = function(quality_parameter, res, result){
quality_parameter_multiple_value_model.where({
  quality_parameter_id:quality_parameter.quality_parameter_id
}).fetchAll()
  .then (function (quality_parameter) {
    // console.log(JSON.stringify(quality_parameter));
    result(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
