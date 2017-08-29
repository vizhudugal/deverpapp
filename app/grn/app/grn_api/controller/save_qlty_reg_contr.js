var save_qlty_reg_dao=require('../dao/save_qlty_reg_dao.js');
exports.save_qlty_reg_contr_fn = function(req, res){
  save_qlty_reg_dao.save_qlty_reg_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
