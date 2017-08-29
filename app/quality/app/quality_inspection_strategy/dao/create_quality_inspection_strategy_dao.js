'use strict';
var quality_inspection_model = require('../model/quality_inspection_model');
var bookshelf = require('../model/database');
exports.create_quality_inspection_strategy_dao_fn = function(quality_parameter, res, result){
console.log(JSON.stringify(quality_parameter));
quality_inspection_model.forge({
      quality_strat_name:quality_parameter.quality_strat_name,
      quality_strat_id:quality_parameter.quality_strat_id
        }).save()
  .then (function (quality_parameter) {
    result(quality_parameter);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
