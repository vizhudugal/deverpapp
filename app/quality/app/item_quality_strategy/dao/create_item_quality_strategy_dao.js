'use strict';
var item_quality_strategy_model = require('../model/item_quality_strategy');
var bookshelf = require('../model/database');
exports.create_item_quality_strategy_dao_fn = function(quality_testing, res, result){
item_quality_strategy_model.forge({
      test_id               :quality_testing.test_id,
      irn_id                :quality_testing.irn_id,
      item_id               :quality_testing.item_id,
      quality_parameter_id  :quality_testing.quality_parameter_id,
      actual_value          :quality_testing.actual_value,
      unit_of_measure_id    :quality_testing.unit_of_measure_id,
      status                :quality_testing.status
        }).save()
  .then (function (quality_parameter) {
    result(quality_parameter);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
