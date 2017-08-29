// var fetch_p_o_model=require('../model/purchase_order_model.js');
var bookshelf = require('../model/database');
exports.fetch_p_o_dao_fn= function(result){
  bookshelf.knex('od_purchase_request_external as T1')
  .join('md_procurement_item as T2','T1.item_id','T2.item_id')
  .join('od_procurement_item_supplier_mapping as T6','T1.item_id','T6.item_id')
  .join('md_procurement_supplier as T7','T6.supplier_id','T7.supplier_id ')
  .join('md_item_item_type as T3','T2.item_type_id','T3.item_type_id ')
  .join('md_item_container_name as T4','T2.container_type_id','T4.container_type_id ')
  .join('md_warehouse_warehouse as T5','T1.warehouse_stores_id','T5.warehouse_stores_id ')
  .join('md_item_unit_of_measure as T8','T8.unit_of_measure_id','T2.unit_of_measure_id')
  .where({'T1.status':"active",'T7.supplier_status':"approval"})// and condition where T1.status='active' and T7.status='approval';
  .then(function(purchase_order_response){
    // console.log(JSON.stringify(purchase_order_response,null,1));
    result(purchase_order_response)
  })
  .catch(function (err) {
    console.error(err);
    result("not get values")
  });
}
