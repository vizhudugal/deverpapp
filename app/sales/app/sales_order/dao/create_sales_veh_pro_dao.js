'use strict';

var bookshelf = require('../model/database');
var new_sales_veh_pro_model = require('../model/salesorder_model');
var sales_veh_pro_model = bookshelf.model('sales_veh_pro_model');

exports.add_sales_veh_pro_dao_fn = function(salesorder,res,result){
        sales_veh_pro_model.forge({
      goods_vehicle_number:salesorder.veh,
      salesorder_id:salesorder.sal,
      item_id:salesorder.item,
      shipping_quantity:salesorder.quan

      }).save()
      .then (function (salesorder_id) {

        result(salesorder_id);
      })
      .catch(function (err) {
          res.status(500).json({error: true, data: {message: err.message}});
          console.log("Error: "+err);
      });
  }
