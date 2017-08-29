'use strict';
var bookshelf = require('../model/database');
var quality_parameter_range_model = require('../model/quality_parameter_range_model');

exports.fetch_quality_parameter_id_range_dao_fn = function(quality_parameter, res, result){
quality_parameter_range_model.where({
    quality_strat_id:quality_parameter.quality_strat_id
  }).fetchAll({columns:['quality_parameter_id']})
    .then (function (quality_parameter) {
      // console.log("fetch value"+JSON.stringify(quality_parameter));
      result(quality_parameter);
    })
    .catch(function (err) {
      result(err);
        // res.status(500).json({error: true, data: {message: err.message}});
        console.log("Error: "+err);
    });
}
