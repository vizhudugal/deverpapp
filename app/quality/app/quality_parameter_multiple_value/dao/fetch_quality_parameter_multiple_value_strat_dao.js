'use strict';

var bookshelf = require('../model/database');

exports.fetch_quality_parameter_multiple_value_strat_dao_fn = function(quality_parameter, res, result){
bookshelf.knex('od_item_quality_strat_map  as t1')
.select(['t1.*','t2.*','t3.item_name','t3.item_id'])
.innerJoin('od_quality_param_strat_multiple_value_map as t2','t1.quality_strat_id','t2.quality_strat_id')
.innerJoin('md_procurement_item as t3','t3.item_id','t1.item_id')
.where({'t2.quality_strat_id':quality_parameter.quality_strat_id})
// .where('t1.quality_strat_id','t2.quality_strat_id')
  .then (function (quality_parameter) {
    result(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
