var save_sales_veh_map_dao=require('../dao/save_sales_veh_map_dao.js');
exports.save_sales_veh_map_contr_fn = function(req, res){
  save_sales_veh_map_dao.save_sales_veh_map_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
