var fetch_p_r_itemname_dao=require('../dao/fetch_p_r_itemname_dao');
exports.fetch_p_r_itemname_contr_fn=function(req,res,result){
  fetch_p_r_itemname_dao.fetch_p_r_itemname_dao_fn(req.query,function(result){
      res.json({'itemdetails':result});
  })
}
