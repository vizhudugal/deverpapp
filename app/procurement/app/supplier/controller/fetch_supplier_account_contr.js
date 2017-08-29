var fetch_supplier_account_dao=require('../dao/fetch_supplier_account_dao');
exports.fetch_supplier_account_contr_fn=function(req,res,result){
  // console.log(req);
  fetch_supplier_account_dao.fetch_supplier_account_dao_fn(req.query,function(result){
      res.json({'returnval':[result]});
  })
}
