'use strict';
var inward_reg_model = require('../model/inward_reg_model');
var bookshelf = require('../model/database');
exports.fetch_qstrat_id_dao_fn = function(od_inward_reg, res, result){
  bookshelf.knex('od_inward_register  as t1')
  .select('t1.item_id','t2.quality_strat_id')
  .innerJoin('od_item_quality_strat_map as t2','t2.item_id','t1.item_id')
  .where({'t1.inward_register_number':od_inward_reg.inward_register_number})
    .then (function (od_inward_reg) {
      console.log(od_inward_reg);
      result(od_inward_reg);
    })
    .catch(function (err) {
      result(err);
        // res.status(500).json({error: true, data: {message: err.message}});
        console.log("Error: "+err);
    });
}
