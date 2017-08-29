'use strict';

var quality_inward_reg_model = require('../model/quality_inward_reg');
var bookshelf = require('../model/database');
exports.create_quality_inward_reg_dao_fn = function(quality_parameter, res, result){
console.log(JSON.stringify(quality_parameter));
// console.log(quality_parameter.qualitynamevalue);
  quality_inward_reg_model.forge({
      grn_id: quality_parameter.grn_id,
      item_id:quality_parameter.item_id,
      container_id:quality_parameter.container_id,
      container_type_id: quality_parameter.container_type_id,
      item_quantity:quality_parameter.item_quantity,
      unit_of_measure_id:quality_parameter.unit_of_measure_id,
      qlty_inward_status: quality_parameter.qlty_inward_status
  }).save()
  .then (function (quality_parameter) {
    result(quality_parameter)
    })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
