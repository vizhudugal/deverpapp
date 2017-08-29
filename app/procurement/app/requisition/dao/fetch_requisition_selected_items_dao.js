'use strict';
var bookshelf = require('../model/database');

exports.fetch_selected_item_dao_fn =function(req,res,result){
  bookshelf.knex.select('*').from('md_procurement_item')
  .leftJoin('md_item_item_type','md_procurement_item.item_type_id','md_item_item_type.item_type_id')
  .leftJoin('md_item_container_name','md_procurement_item.container_type_id','md_item_container_name.container_type_id')
  .leftJoin('md_item_unit_of_measure','md_procurement_item.unit_of_measure_id','md_item_unit_of_measure.unit_of_measure_id')
  .leftJoin('md_warehouse_warehouse','md_procurement_item.warehouse_stores_id','md_warehouse_warehouse.warehouse_stores_id')
  .where('item_id',req.itemid).then(function (status) {
      if (status.length>0) {
        result(status);
      }
      else{
        bookshelf.knex.select('*').from('md_sales_finishedgoods_item')
        .leftJoin('md_item_item_type','md_sales_finishedgoods_item.item_type_id','md_item_item_type.item_type_id')
        .leftJoin('md_item_container_name','md_sales_finishedgoods_item.container_type_id','md_item_container_name.container_type_id')
        .leftJoin('md_item_unit_of_measure','md_sales_finishedgoods_item.unit_of_measure_id','md_item_unit_of_measure.unit_of_measure_id')
        .leftJoin('md_warehouse_warehouse','md_sales_finishedgoods_item.warehouse_stores_id','md_warehouse_warehouse.warehouse_stores_id')
        .where('item_id',req.itemid).then(function (status) {
          if (status.length>0) {
            result(status);
          }
          else {
            result("No Data!");
          }
        })
        .catch(function(err){
          console.error(err);
        })
      }
    })
  .catch(function(err){
    console.error(err);
  })
}
