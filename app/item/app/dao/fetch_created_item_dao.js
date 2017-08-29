'use strict';

var database = require('../model/database');
var fetch_ceo_item_model = require('../model/item_model.js');
var itemDetailsData=database.model('item_details_model');
var item_extended_model_fg=database.model('item_extended_model_fg');

exports.fetch_ceo_item_dao_fn =function(req,res,result){
  database.knex.select('*').from('md_procurement_item as t1')
  .leftJoin('md_item_item_type as t2','t1.item_type_id','t2.item_type_id')
  .leftJoin('md_item_container_name as t3','t1.container_type_id','t3.container_type_id')
  .leftJoin('md_item_unit_of_measure as t4','t1.unit_of_measure_id','t4.unit_of_measure_id')
  .leftJoin('md_warehouse_warehouse as t5','t1.warehouse_stores_id','t5.warehouse_stores_id')
  .leftJoin('md_item_group_name as t6','t1.item_group','t6.group_id')
  .where({item_status:"Created"})
  .then(function(status){
    database.knex.select('*').from('md_sales_finishedgoods_item as t1')
    .leftJoin('md_item_item_type as t2','t1.item_type_id','t2.item_type_id')
    .leftJoin('md_item_container_name as t3','t1.container_type_id','t3.container_type_id')
    .leftJoin('md_item_unit_of_measure as t4','t1.unit_of_measure_id','t4.unit_of_measure_id')
    .leftJoin('md_warehouse_warehouse as t5','t1.warehouse_stores_id','t5.warehouse_stores_id')
    .leftJoin('md_item_group_name as t6','t1.item_group','t6.group_id')
    .where({item_status:"Created"})
    .then(function(status1){
      result(status,status1);
    })
    .catch(function(err){
      console.error(err);
      result(err)
    })
  })
  .catch(function(err){
    console.error(err);
    result(err)
  })
}
