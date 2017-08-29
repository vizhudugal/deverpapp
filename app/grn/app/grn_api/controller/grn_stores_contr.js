var grn_stores_dao=require('../dao/grn_stores_dao.js');
exports.grn_stores_contr_fn = function(req, res){
  grn_stores_dao.grn_stores_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
