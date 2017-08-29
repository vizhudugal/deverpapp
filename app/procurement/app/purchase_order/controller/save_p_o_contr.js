var save_p_o_dao=require('../dao/save_p_o_dao.js');
exports.save_p_o_contr_fn = function(req, res){
  save_p_o_dao.save_p_o_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
