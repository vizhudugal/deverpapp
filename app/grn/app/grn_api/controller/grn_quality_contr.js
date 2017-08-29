var grn_quality_dao=require('../dao/grn_quality_dao.js');
exports.grn_quality_contr_fn = function(req, res){
  grn_quality_dao.grn_quality_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
