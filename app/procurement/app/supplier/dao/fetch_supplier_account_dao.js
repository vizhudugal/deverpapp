var supplier_model = require('../model/supplier_model');
var bookshelf = require('../model/database');
var fetch_supplier_account_model = bookshelf.model('supplier_account_extended_model');
exports.fetch_supplier_account_dao_fn = function(req,result){
  fetch_supplier_account_model.forge({supplier_id:req.supplier_id}).fetch()
  .then (function (supplier_fetch_account_data) {
      result(supplier_fetch_account_data)
  })
  .catch(function (err) {
    result(err);
  });
}
