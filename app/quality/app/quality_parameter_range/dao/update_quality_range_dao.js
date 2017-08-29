'use strict';

// var update_status_model = require('../model/update_status_model');
var bookshelf = require('../model/database');
exports.update_quality_range_dao_fn = function(update_range, res, result){
bookshelf.knex('od_quality_param_strat_range_map')
.where('quality_parameter_id',update_range.quality_parameter_id)
.update({
  minimum_value: update_range.minimum_value,
  maximum_value:update_range.maximum_value
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
