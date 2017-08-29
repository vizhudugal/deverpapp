var fetch_supplier_tax_dao=require('../dao/fetch_supplier_tax_dao');
exports.fetch_supplier_tax_contr_fn=function(req,res,result){
  fetch_supplier_tax_dao.fetch_supplier_tax_dao_fn(req.query,function(result){
      res.json({'returnval':[result]});
  })
}
