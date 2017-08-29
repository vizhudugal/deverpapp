'use strict';
var item_quality_testing_model = require('../model/item_quality_testing_model');
var bookshelf = require('../model/database');
exports.create_item_quality_testing_dao_fn = function(quality_testing, res, result){
console.log(JSON.stringify(quality_testing));
item_quality_testing_model.forge({
      irn_id                :quality_testing.irn_id,
      item_id               :quality_testing.item_id,
      quality_parameter_id  :quality_testing.quality_parameter_id,
      actual_value          :quality_testing.actual_value,
      container_no          :quality_testing.container_no,
      test_status           :quality_testing.test_status
        }).save()
  .then (function (quality_parameter) {
    result(quality_parameter);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
