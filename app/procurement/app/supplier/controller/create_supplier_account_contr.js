var create_supplier_account_dao=require('../dao/create_supplier_account_dao.js');
exports.create_supplier_account_contr_fn = function(req, res){
  create_supplier_account_dao.create_supplier_account_dao_fn(req.query,function(data){
  res.json({'datavalue':'success'});
  });
};
