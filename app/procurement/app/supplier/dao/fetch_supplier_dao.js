var supplier_model = require('../model/supplier_model');
var bookshelf = require('../model/database');
var fetch_supplier_model = bookshelf.model('supplier_md_extented_model');
exports.fetch_supplier_dao_fn = function(req,result){
  fetch_supplier_model.forge({supplier_id:req.supplier_id}).fetchAll()
  .then (function (supplier_fetch_data) {
      result(supplier_fetch_data)
  })
  .catch(function (err) {
    result(err);
  });
}
