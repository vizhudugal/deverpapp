
// incomplete.....________*********
var bookshelf = require('../model/database');
exports.fetch_p_r_itemname_dao_fn= function(purchase_request_data,result){
  // console.log(purchase_request_data.itemid);
  // select t1.*,t2.*,t3.*,t4.* from test.md_procurement_item as t1
  // join test.md_item_item_type as t2 on t1.item_type_id=t2.item_type_id
  // join test.md_item_container_name as t3 on t1.container_type_id=t3.container_type_id
  // join test.md_warehouse_warehouse as t4 on t1.warehouse_stores_id = t4.warehouse_stores_id
  // where t1.item_name='rci roll';
  bookshelf.knex('md_procurement_item as T1')
  .join('md_item_item_type as T2','T1.item_type_id','T2.item_type_id')
  .join('md_item_container_name as T3','T1.container_type_id','T3.container_type_id')
  .join('md_warehouse_warehouse as T4','T1.warehouse_stores_id','T4.warehouse_stores_id')
  .join('od_procurement_item_supplier_mapping as T5','T1.item_id','T5.item_id')
  .join('md_procurement_supplier as T6','T6.supplier_id','T5.supplier_id')
  .select('T1.*','T2.*','T3.*','T4.*','T6.*').where('T1.item_id',purchase_request_data.itemid)
  .then(function(purchase_request_response){
    console.log(JSON.stringify(purchase_request_response,null,1));
    result(purchase_request_response);
  })
  .catch(function (err) {
      console.log("Error: "+err);
  });
}
