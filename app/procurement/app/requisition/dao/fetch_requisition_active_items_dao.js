'use strict';
var bookshelf = require('../model/database');

exports.fetch_active_item_dao_fn =function(req,res,result){
  bookshelf.knex.select('*').from('md_procurement_item')
  .leftJoin('md_procurement_requisition_itemtype_role_mapping','md_procurement_requisition_itemtype_role_mapping.item_type_id','md_procurement_item.item_type_id')
  .leftJoin('md_item_item_type','md_procurement_item.item_type_id','md_item_item_type.item_type_id')
  .leftJoin('md_item_container_name','md_procurement_item.container_type_id','md_item_container_name.container_type_id')
  .leftJoin('md_item_unit_of_measure','md_procurement_item.unit_of_measure_id','md_item_unit_of_measure.unit_of_measure_id')
  .leftJoin('md_warehouse_warehouse','md_procurement_item.warehouse_stores_id','md_warehouse_warehouse.warehouse_stores_id')
  .leftJoin('md_item_group_name','md_procurement_item.item_group','md_item_group_name.group_id')
  .where({'md_procurement_item.item_status':'active','md_procurement_requisition_itemtype_role_mapping.role_id':req.role})
  .then(function (pgitems) {
    bookshelf.knex.select('*').from('md_sales_finishedgoods_item')
    .leftJoin('md_procurement_requisition_itemtype_role_mapping','md_procurement_requisition_itemtype_role_mapping.item_type_id','md_sales_finishedgoods_item.item_type_id')
    .leftJoin('md_item_item_type','md_sales_finishedgoods_item.item_type_id','md_item_item_type.item_type_id')
    .leftJoin('md_item_container_name','md_sales_finishedgoods_item.container_type_id','md_item_container_name.container_type_id')
    .leftJoin('md_item_unit_of_measure','md_sales_finishedgoods_item.unit_of_measure_id','md_item_unit_of_measure.unit_of_measure_id')
    .leftJoin('md_warehouse_warehouse','md_sales_finishedgoods_item.warehouse_stores_id','md_warehouse_warehouse.warehouse_stores_id')
    .leftJoin('md_item_group_name','md_sales_finishedgoods_item.item_group','md_item_group_name.group_id')
    .where({'md_sales_finishedgoods_item.item_status':'active','md_procurement_requisition_itemtype_role_mapping.role_id':req.role})
    .then(function (fgitems) {
      var pgfgitems=pgitems.concat(fgitems);
      var pgfgitemArray = new Array();
      for (var i = 0; i < pgfgitems.length; i++) {
        pgfgitemArray.push({text:pgfgitems[i].item_name,value:pgfgitems[i].item_id});
      }
      result(pgfgitemArray);
    })
    .catch(function(err){
      console.error(err);
    })
  })
  .catch(function(err){
    console.error(err);
  })
}
