var fetch_purchase_container_det_dao=require('../dao/fetch_purchase_container_det_dao.js');
exports.fetch_purchase_container_det_contr_fn = function(req, res){
  fetch_purchase_container_det_dao.fetch_purchase_container_det_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
