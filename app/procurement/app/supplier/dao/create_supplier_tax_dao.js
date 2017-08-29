var create_supplier_tax_model=require('../model/supplier_model.js');
var bookshelf = require('../model/database');
var supplier_tax_extended_model = bookshelf.model('supplier_tax_extended_model');
exports.create_supplier_tax_dao_fn= function(supplier_tax_data,result){
  supplier_tax_extended_model.forge({
  	  state_gst:supplier_tax_data.state_gst,
  	  national_gst:supplier_tax_data.national_gst,
  	  intra_gst:supplier_tax_data.intra_gst,
      supplier_id:supplier_tax_data.supplier_id
  }).save()
  .then(function(supplier_tax_response){
    result(supplier_tax_response)
  })
  .catch(function (err) {
      result(err)
  });
}
