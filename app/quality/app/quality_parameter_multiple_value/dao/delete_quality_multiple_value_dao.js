'use strict';
var bookshelf = require('../model/database');
exports.delete_quality_multiple_value_dao_fn = function(quality_parameter, res, result){
  console.log(quality_parameter.quality_parameter_id);
bookshelf.knex('od_quality_param_strat_multiple_value_map')
  .where('quality_parameter_id', quality_parameter.quality_parameter_id)
  .del()
  .then (function (quality_parameter) {
    console.log(quality_parameter);
    result(quality_parameter);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
