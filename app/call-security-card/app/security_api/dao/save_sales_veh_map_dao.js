var bookshelf = require('../model/database');
var od_sales_veh_map=require('../model/security_model.js')
var od_sales_veh_map_extnd_model=bookshelf.model('od_sales_veh_map_extnd_model');
exports.save_sales_veh_map_dao_fn= function(req,result){
  od_sales_veh_map_extnd_model.forge({goods_vehicle_number:req.vehno,
                                      salesorder_id:req.salid,
                                      created_by:req.created_by,
                                      created_on:null,
                                      updated_by:req.updated_by,
                                      updated_on:null,
                                      status:req.status
                                    }).save()
        .then(function(save_sales_veh_map_response){
          result(save_sales_veh_map_response)
        })
        .catch(function (err) {
            console.log("Error: "+err);
        });
}
