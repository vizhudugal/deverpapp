'use strict';

var item_quality_strategy_model = require('../model/item_quality_strategy');
var bookshelf = require('../model/database');
var item_quality_strat=bookshelf.model('item_quality_strat_model');
exports.fetch_item_quality_strategy_dao_fn = function(quality_parameter, res, result){
  // console.log("itemid"+quality_parameter.item_id);
item_quality_strat.where({
  item_id:quality_parameter.item_id
}).fetchAll()
  .then (function (quality_parameter) {
    // console.log("result"+JSON.stringify(quality_parameter));
    result(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
