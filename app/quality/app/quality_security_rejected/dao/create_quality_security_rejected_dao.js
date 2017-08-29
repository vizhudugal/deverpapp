'use strict';

var quality_security_rejected_model= require('../model/quality_security_rejected');
var bookshelf = require('../model/database');

exports.create_quality_security_rejected_dao_fn = function(quality_parameter, res, result){
quality_security_rejected_model.forge({
        inward_register_number:quality_parameter.inward_register_number,
        item_id:quality_parameter.item_id,
        container_quantity:quality_parameter.container_quantity,
        item_quantity:quality_parameter.item_quantity,
        remarks:quality_parameter.remarks,
        rejected_status:quality_parameter.rejected_status,
        reason_id:quality_parameter.reason_id,
        container_type_id:quality_parameter.container_type_id,
        unit_of_measure_id:quality_parameter.unit_of_measure_id,
        supplier_id:quality_parameter.supplier_id,
        emp_id:quality_parameter.emp_id
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
