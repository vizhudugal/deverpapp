var save_sup_item_map=require('../model/supplier_model.js');
var bookshelf = require('../model/database');
var save_sup_item_map_model = bookshelf.model('od_sup_item_map_extented_model');
exports.save_sup_item_map_dao_fn= function(supplier_data,result){
  // console.log(supplier_data.snameval);
  save_sup_item_map_model.forge({
      supplier_id:supplier_data.supid,
  	  item_id:supplier_data.itemid,
      effective_date:supplier_data.effectivedate,
      pricing:supplier_data.pricing,
      created_by:supplier_data.created_by,
      created_on:null,
      updated_by:supplier_data.updated_by,
      updated_on:null}).save()
  .then(function(response){
    result(response)
  })
  .catch(function (err) {
      console.log("Error: "+err);
  });
}
