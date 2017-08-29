'use strict';

// var update_status_model = require('../model/update_status_model');
var bookshelf = require('../model/database');
exports.update_quality_parameter_multiple_value_dao_fn = function(update_range, res, result){
bookshelf.knex('od_quality_param_strat_multiple_value_map')
.where('quality_parameter_id',update_range.quality_parameter_id)
.update({
  quality_strat_id: update_range.quality_strat_id,
  quality_parameter_id:update_range.quality_parameter_id,
  multiple_value:update_range.multiple_value,
  multiple_value_status:update_range.multiple_value_status
})
  .then (function (updated) {
    console.log("updated"+updated);
    result(updated);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
