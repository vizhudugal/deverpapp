'use strict';
var bookshelf = require('../model/database');
var item_model = require('../model/item_model.js');
var item_details_model_fg=bookshelf.model('item_extended_model_fg');

exports.create_fg_item_dao_fn = function(item_detail, res, result){
  item_details_model_fg.forge({
                  item_name:item_detail.name,
                  item_description:item_detail.description,
                  item_specification1:item_detail.specification1,
                  item_specification2:item_detail.specification2,
                  container_type_id:item_detail.container,
                  unit_of_measure_id:item_detail.unit,
                  item_group:item_detail.group,
                  item_type_id:item_detail.type,
                  item_status:item_detail.itemstatus,
                  item_purchase_type:item_detail.ptype,
                  warehouse_stores_id:item_detail.warehouselocation,
                  standard_item_type_id:item_detail.standarditemtypeid,
                  inspection_required:item_detail.inspectionrequired,
                  created_by:item_detail.createdby,
                  created_on:null,
                  updated_by:item_detail.updatedby,
                  updated_on:null
                }).save()
  .then (function (status) {
    result("Item Created!");
  })
  .catch(function (err) {
    console.error(err);
    result("Item not Created!");
  });
}
