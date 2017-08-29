'use strict';

var item_quality_testing_model = require('../model/item_quality_testing_model');
var bookshelf = require('../model/database');
exports.fetch_item_quality_testing_dao_fn = function(quality_parameter, res, result){
item_quality_testing_model.forge({
  quality_strat_name:quality_parameter.quality_strat_name
}).fetch()
  .then (function (quality_parameter) {
    console.log(JSON.stringify(quality_parameter));
    result(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
