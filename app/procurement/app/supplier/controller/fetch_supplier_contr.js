var fetch_supplier_dao=require('../dao/fetch_supplier_dao');
exports.fetch_supplier_contr_fn=function(req,res,result){
  // console.log(req);
  fetch_supplier_dao.fetch_supplier_dao_fn(req.query,function(result){
      res.json({'returnval':result});
  })
}
