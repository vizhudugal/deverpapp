var bookshelf = require('../model/database');
exports.fetch_p_r_dao_fn= function(purchase_request_data,result){

//   select T4.supplier_name,T4.supplier_id,T2.item_name,T5.container_name from md_procurement_requisition_itemtype_role_mapping as T1
// join md_procurement_item as T2 on T1.item_type_id=T2.item_type_id
// join od_procurement_item_supplier_mapping as T3 on T2.item_id = T3.item_id
// join md_procurement_supplier as T4 on T3.supplier_id = T4.supplier_id
// join md_item_container_name as T5 on T5.container_type_id = T2.container_type_id
// where T1.role_id=11 and T2.item_status='active';
  bookshelf.knex('md_procurement_requisition_itemtype_role_mapping as T1')
  .join('md_procurement_item as T2','T1.item_type_id','T2.item_type_id')
  .join('od_procurement_item_supplier_mapping as T3','T2.item_id','T3.item_id')
  .join('md_procurement_supplier as T4','T3.supplier_id','T4.supplier_id')
  .join('md_item_container_name as T5','T5.container_type_id','T2.container_type_id')
  .select('T4.supplier_name','T4.supplier_id','T2.item_name','T2.item_id','T5.container_name')
  .where({'T1.role_id':purchase_request_data.role,'T2.item_status':'active'})
  .then(function(purchase_request_response){
    console.log(JSON.stringify(purchase_request_response,null,1));
    result(purchase_request_response);
  })
  .catch(function (err) {
    console.log("Error: "+err);
    result("not get values");

  });
}
