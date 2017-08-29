'use strict';
var quality_multiple_value_history_model = require('../model/quality_multiple_value_history_model');
var bookshelf = require('../model/database');
exports.create_quality_multiple_value_history_dao_fn = function(quality_parameter, res, result){
quality_multiple_value_history_model.forge({
      multiple_value:quality_parameter.multiple_value,
      quality_parameter_id:quality_parameter.quality_parameter_id,
      status:quality_parameter.status,
      emp_id:quality_parameter.emp_id,
      deleted_date_time:quality_parameter.deleted_date_time,
      quality_strat_id:quality_parameter.quality_startegy_id
        }).save()
  .then (function (quality_parameter) {
    result(quality_parameter);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
