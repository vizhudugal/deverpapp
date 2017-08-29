

var fetch_sales_order_veh_dao=require('../dao/fetch_sales_order_veh_dao.js');

exports.fetch_sales_order_veh_fn = function(req, res){
  fetch_sales_order_veh_dao.fetch_sales_order_veh_dao_fn(req.query,function(data){
      res.json({'returnval':data});
  });
};
