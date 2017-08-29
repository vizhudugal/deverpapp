'use strict';

var quality_parameter_range_model = require('../model/quality_parameter_range_model');
var bookshelf = require('../model/database');
// var quality_parameter_range_model = bookshelf.model('quality_parameter_range_model');

exports.create_quality_parameter_range_dao_fn = function(quality_parameter, res, result){
quality_parameter_range_model.forge({
      quality_parameter_id:quality_parameter.quality_parameter_id,
      quality_strat_id:quality_parameter.quality_strat_id,
      minimum_value: quality_parameter.minimum_value,
      maximum_value:quality_parameter.maximum_value,
      unit_of_measure_id:quality_parameter.unit_of_measure_id
    }).save()
  .then (function (quality_parameter) {
    result(quality_parameter);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
