var save_cont_det_dao=require('../dao/save_cont_det_dao.js');
exports.save_cont_det_contr_fn = function(req, res){
  save_cont_det_dao.save_cont_det_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
