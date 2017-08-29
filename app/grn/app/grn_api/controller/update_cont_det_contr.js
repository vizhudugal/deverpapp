var update_cont_det_dao=require('../dao/update_cont_det_dao.js');
exports.update_cont_det_contr_fn = function(req, res){
  update_cont_det_dao.update_cont_det_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
