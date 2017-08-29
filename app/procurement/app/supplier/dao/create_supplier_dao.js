var create_supplier=require('../model/supplier_model.js');
var bookshelf = require('../model/database');
var create_supplier_model = bookshelf.model('supplier_md_extented_model');
exports.create_supplier_dao_fn= function(supplier_data,result){
  create_supplier_model.forge({
  	  supplier_name:supplier_data.snameval,
  	  address_1:supplier_data.adval1,
  	  address_2:supplier_data.adval2,
    	address_3:supplier_data.adval3,
    	city:supplier_data.citynameval,
    	state:supplier_data.stateVal,
    	country:supplier_data.countryVal,
    	pincode:supplier_data.pinval,
    	mobile_1:supplier_data.mobnumval1,
    	mobile_2:supplier_data.mobnumval2,
    	email:supplier_data.emidval,
    	status:supplier_data.statusval,
      created_by:supplier_data.created_by,
      created_on:null,
      updated_by:supplier_data.updated_by,
      updated_on:null
  }).save()
  .then(function(response){
    // console.log(bookshelf.knex().select().LAST_INSERT_ID());
    result(response)
  })
  .catch(function (err) {
      console.log("Error: "+err);
  });
}
