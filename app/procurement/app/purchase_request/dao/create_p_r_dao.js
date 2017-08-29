var create_p_r_model=require('../model/p_r_model.js');
var bookshelf = require('../model/database');
var purchase_request_extended_model = bookshelf.model('purchase_request_extended_model');
exports.create_p_r_dao_fn= function(purchase_request_data,result){
  // console.log(purchase_request_data);
  // console.log(JSON.stringify(purchase_request_data));
  purchase_request_extended_model.forge({
  	  purchase_request_number:purchase_request_data.purchase_requestid,
  	  purchase_request_date:purchase_request_data.purchase_requestdate,
  	  purchase_request_type_id:purchase_request_data.selectedtype,
    	item_id:purchase_request_data.iid,
      item_quantity:purchase_request_data.itemquantity,
      container_quantity:purchase_request_data.itemcontainerquantity,
      warehouse_stores_id:purchase_request_data.whlocation,
      status:'Created',
      item_required_date:purchase_request_data.requireddate,
      supplier_name:purchase_request_data.supplier_name,
      created_by:purchase_request_data.created_by,
      created_on:null,
      updated_by:purchase_request_data.updated_by,
      updated_on:null
  }).save()
  .then(function(purchase_request_response){
    result(purchase_request_response)
  })
  .catch(function (err) {
      console.error(err);
  });
}
