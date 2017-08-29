'use strict';

var fetch_timeline_model = require('../model/salesorder_model');
var bookshelf = require('../model/database');

exports.fetch_timeline_dao_fn = function(salesorder,res,result){
    bookshelf.knex('od_logistics_finishedgoods_vehicle_status_tracking as T1').select( 'T1.*','T2.*')
      .leftJoin('od_logistics_vehicle_salesorder_mapping as T2', 'T2.goods_vehicle_number', 'T1.goods_vehicle_number')
      .where({'T2.salesorder_id':salesorder.salesid})

    .then (function (salesorder) {
        result(salesorder)
    })
    .catch(function (err) {
        console.error(err);
        res.status(500).json({error: true, data: {message: err.message}});
    });
}
