'use strict';
var inward_reg_model = require('../model/inward_reg_model');
var bookshelf = require('../model/database');
exports.create_inward_reg_dao_fn = function(od_inward_reg, res, result){
inward_reg_model.forge({
      inward_register_number      :od_inward_reg.inward_register_number,
      supplier_id                 :od_inward_reg.supplier_id,
      item_id                     :od_inward_reg.item_id,
      container_type_id           :od_inward_reg.container_type_id,
      unit_of_measure_id          :od_inward_reg.unit_of_measure_id,
      container_quantity          :od_inward_reg.container_quantity,
      item_quantity               :od_inward_reg.item_quantity,
      remarks                     :od_inward_reg.remarks,
      inward_status               :od_inward_reg.status,
      po_number                   :od_inward_reg.po_number,
      po_date                     :od_inward_reg.po_date,
      accepted_container_quantity :od_inward_reg.accepted_container_quantity,
      accepted_item_quantity      :od_inward_reg.accepted_item_quantity
        }).save()
  .then (function (od_inward_reg) {
    result();
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
