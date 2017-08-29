var create_supplier_account_model=require('../model/supplier_model.js');
var bookshelf = require('../model/database');
var supplier_account_extended_model = bookshelf.model('supplier_account_extended_model');
exports.create_supplier_account_dao_fn= function(supplier_account_data,result){
  // console.log(supplier_account_data.bank_name);
  supplier_account_extended_model.forge({
  	  bank_name:supplier_account_data.bank_name,
  	  account_number:supplier_account_data.account_number,
  	  branch_name:supplier_account_data.branch_name,
    	IFSC_number:supplier_account_data.IFSC_number,
      supplier_id:supplier_account_data.supplier_id
  }).save()
  .then(function(supplier_account_response){
    result(supplier_account_response)
  })
  .catch(function (err) {
      console.log("Error: "+err);
  });
}
