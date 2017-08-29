'use strict';
var quality_range_history_model = require('../model/quality_range_history_model');
var bookshelf = require('../model/database');
exports.create_quality_range_history_dao_fn = function(quality_parameter, res, result){
  // console.log(JSON.stringify(quality_parameter));
quality_range_history_model.forge({
  quality_parameter_id:quality_parameter.quality_parameter_id,
  status:quality_parameter.status,
  emp_id:quality_parameter.emp_id,
  deleted_date_time:quality_parameter.deleted_date_time,
  quality_strategy_id:quality_parameter.quality_strategy_id,
  minimum_value:quality_parameter.minimum_value,
  maximum_value:quality_parameter.maximum_value,
  unit_of_measure_id:quality_parameter.unit_of_measure_id
        }).save()
  .then (function (quality_range_callback) {
    // console.log(JSON.stringify(quality_range_callback));
    result(quality_range_callback);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
