var grn_wms_dao=require('../dao/grn_wms_dao.js');
exports.grn_wms_contr_fn = function(req, res){
  grn_wms_dao.grn_wms_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
