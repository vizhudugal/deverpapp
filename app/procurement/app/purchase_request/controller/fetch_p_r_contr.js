var fetch_p_r_dao=require('../dao/fetch_p_r_dao');
exports.fetch_p_r_contr_fn=function(req,res,result){
  console.log(req.query);
  fetch_p_r_dao.fetch_p_r_dao_fn(req.query,function(result){
      res.json({'itemnames':result});
  })
}
