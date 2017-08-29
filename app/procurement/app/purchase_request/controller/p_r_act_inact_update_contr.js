var p_r_act_inact_update_dao=require('../dao/p_r_act_inact_update_dao');
exports.p_r_act_inact_update_contr_fn=function(req,res,result){
  // console.log(req.query);
  p_r_act_inact_update_dao.p_r_act_inact_update_dao_fn(req.query,function(result){
      res.json({'returnval':result});
  })
}
