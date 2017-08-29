var save_htno_btno_dao=require('../dao/save_htno_btno_dao.js');
exports.save_htno_btno_contr_fn = function(req, res){
  save_htno_btno_dao.save_htno_btno_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
