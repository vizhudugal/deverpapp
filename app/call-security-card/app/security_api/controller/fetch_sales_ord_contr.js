var fetch_sales_ord_dao=require('../dao/fetch_sales_ord_dao.js');
exports.fetch_sales_ord_contr_fn = function(req, res){
  fetch_sales_ord_dao.fetch_sales_ord_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
