var fetch_p_r_active_state_dao=require('../dao/fetch_p_r_active_state_dao');
exports.fetch_p_r_active_state_contr_fn=function(req,res,result){
  // console.log(req.query);
  fetch_p_r_active_state_dao.fetch_p_r_active_state_dao_fn(req.query,function(result){
      res.json({'purchase_requests':result});
  })
}
