'use strict';

var bookshelf = require('../model/database');
var quality_parameter_multiple_value_model = require('../model/quality_parameter_multiple_value_model');
exports.fetch_multiple_value_dao_fn = function(quality_parameter, res, result){
quality_parameter_multiple_value_model.where({
    quality_parameter_id:quality_parameter.quality_parameter_id
  }).fetchAll({columns:['quality_parameter_id','multiple_value']})
  .then (function (quality_parameter) {
    result(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
