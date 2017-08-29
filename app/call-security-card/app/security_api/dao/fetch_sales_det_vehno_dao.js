var bookshelf = require('../model/database');
exports.fetch_sales_det_vehno_dao_fn= function(req,result){
bookshelf.knex('od_sales_sales_order as T1')
.leftJoin('od_logistics_vehicle_salesorder_mapping as T2','T2.salesorder_id','T1.salesorder_id')
.where('T2.goods_vehicle_number',req.searchvehiclenum)
  .then(function(fetch_sales_det_vehno_response){
    result(fetch_sales_det_vehno_response)
  })
  .catch(function (err) {
      console.log("Error: "+err);
  });
}
