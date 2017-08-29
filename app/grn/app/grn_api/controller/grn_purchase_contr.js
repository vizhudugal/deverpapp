var grn_purchase_dao=require('../dao/grn_purchase_dao.js');
exports.grn_purchase_contr_fn = function(req, res){
  grn_purchase_dao.grn_purchase_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
