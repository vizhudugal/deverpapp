'use strict';

// var quality_parameter_multiple_value_model = require('../model/quality_parameter_multiple_value_model');
var quality_parameter_multiple_value_model = require('../model/quality_parameter_multiple_value_model');
var bookshelf = require('../model/database');
// var quality_parameter_multiple_value_model = bookshelf.model('quality_parameter_multiple_value_model');
exports.create_quality_parameter_multiple_value_dao_fn = function(quality_parameter, res, result){
console.log(JSON.stringify(quality_parameter));
quality_parameter_multiple_value_model.forge({
      quality_parameter_id  :quality_parameter.quality_parameter_id,
      quality_strat_id      : quality_parameter.quality_strat_id,
      multiple_value        : quality_parameter.multiple_value,
      multiple_value_status  :quality_parameter.multiple_value_status
    }).save()
  .then (function (quality_parameter) {
    console.log(JSON.stringify(quality_parameter));
    result(quality_parameter);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
