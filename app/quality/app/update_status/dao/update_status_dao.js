'use strict';

// var update_status_model = require('../model/update_status_model');
var bookshelf = require('../model/database');
exports.update_status_dao_fn = function(status_update, res, result){
// update_status_model.where({
//   quality_parameter_id:status_update.quality_parameter_id
// }).save({status:"inactive"})
// toJSON()
bookshelf.knex('od_quality_param_strat_multiple_value_map')
.where('quality_parameter_id',status_update.quality_parameter_id)
.update({
  status: 'inactive',
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
