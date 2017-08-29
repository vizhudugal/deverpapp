var fetch_sales_det_vehno_dao=require('../dao/fetch_sales_det_vehno_dao.js');
exports.fetch_sales_det_vehno_contr_fn = function(req, res){
  fetch_sales_det_vehno_dao.fetch_sales_det_vehno_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
