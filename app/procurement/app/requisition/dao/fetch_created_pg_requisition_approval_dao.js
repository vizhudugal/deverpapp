'use strict';
var bookshelf = require('../model/database');


exports.fetch_created_pg_requisition_dao_fn =function(req,res,result){
  bookshelf.knex.from('od_procurement_requisition as t1')
  .innerJoin('md_procurement_item as t2', 't1.item_id', 't2.item_id')
  .leftJoin('md_item_item_type as t3','t2.item_type_id','t3.item_type_id')
  .leftJoin('md_item_container_name as t4','t2.container_type_id','t4.container_type_id')
  .leftJoin('md_item_unit_of_measure as t5','t2.unit_of_measure_id','t5.unit_of_measure_id')
  .leftJoin('md_warehouse_warehouse as t6','t2.warehouse_stores_id','t6.warehouse_stores_id')
  .leftJoin('md_item_group_name as t7','t2.item_group','t7.group_id')
  .where({"t1.requisition_status":'Created'})
  .then (function (status) {
    result(status)
  })
  .catch(function(err){
    console.error(err);
  })
}
