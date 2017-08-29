'use strict';

var quality_inspection_model = require('../model/quality_inspection_model');
var bookshelf = require('../model/database');
exports.fetch_quality_inspection_strategy_dao_fn = function(quality_parameter, res, result){
quality_inspection_model.where({
  quality_strat_name:quality_parameter.quality_strat_name
}).fetchAll({columns:['quality_strat_id']})
  .then (function (quality_parameter) {
    console.log(JSON.stringify(quality_parameter));
    result(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
