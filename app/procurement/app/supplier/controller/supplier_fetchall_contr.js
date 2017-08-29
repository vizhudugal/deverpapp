var fetchall_supplier_dao=require('../dao/supplier_fetchall_dao');
exports.supplier_fetchall_contr_fn=function(req,res,result){
  // console.log(req);
  fetchall_supplier_dao.supplier_fetchall_dao_fn(req.query,function(result){
      res.json({'returnval':result});
  })
}
