var supplier_model = require('../model/supplier_model');
var bookshelf = require('../model/database');
var autocomplete_sup_name_model = bookshelf.model('supplier_md_extented_model');
exports.autocomplete_sup_name_dao_fn = function(req,result){
  // SELECT UPPER(supplier_name) as supplier_name,supplier_id FROM md_procurement_supplier_detail
  autocomplete_sup_name_model.forge().fetchAll({columns:['supplier_name','supplier_id']})
  .then (function (supplier_fetch_data) {
      result(supplier_fetch_data)
  })
  .catch(function (err) {
    result(err);
  });
}
