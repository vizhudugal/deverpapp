
var bookshelf = require('../model/database');
exports.fetch_sales_ord_dao_fn= function(req,result){
  console.log(req.vehno);
      var subquery = bookshelf.knex('od_logistics_vehicle_salesorder_mapping')
        .select('salesorder_id').where('od_logistics_vehicle_salesorder_mapping.goods_vehicle_number',req.vehno)

      bookshelf.knex('od_sales_sales_order').select().where('salesorder_id', 'not in', subquery)
        .then(function(fetch_sales_ord_response){
          result(fetch_sales_ord_response)
        })
        .catch(function (err) {
            console.log("Error: "+err);
        });
}
