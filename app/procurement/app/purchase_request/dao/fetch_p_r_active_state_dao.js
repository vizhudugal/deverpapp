var bookshelf = require('../model/database');
exports.fetch_p_r_active_state_dao_fn= function(purchase_request_data,result){
// select distinct T5.*,T1.*,T6.item_type_name,T7.container_name
  bookshelf.knex('md_procurement_item as T5')
  .join('od_purchase_request_external as T1','T1.item_id','T5.item_id')
  .join('md_procurement_requisition_itemtype_role_mapping as T2','T1.purchase_request_type_id','T2.item_type_id')
  .join('md_item_item_type as T6','T5.item_type_id','T6.item_type_id')
  .select('T5.*','T1.*','T6.item_type_name','T7.container_name')
  .join('md_item_container_name as T7','T5.container_type_id','T7.container_type_id')
  .where({'T2.role_id':purchase_request_data.role,'T1.status':'Created'})
  .then(function(purchase_request_response){
    // console.log(JSON.stringify(purchase_request_response,null,1));
    result(purchase_request_response);
  })
  .catch(function (err) {
    console.log("Error: "+err);
    result("not get values");

  });
}
