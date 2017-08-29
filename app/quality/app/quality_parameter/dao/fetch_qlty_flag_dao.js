'use strict';

var bookshelf = require('../model/database');
var new_quality_parameter_model = require('../model/quality_parameter_model');

exports.fetch_qlty_flag_dao_fn = function(quality_parameter, res, result){
  new_quality_parameter_model.where({
      quality_parameter_id:quality_parameter.quality_parameter_id
    }).fetchAll({columns:['quality_parameter_flag','quality_parameter_id']})
  .then (function (od_inward_reg) {
    // console.log(od_inward_reg);
    result(od_inward_reg);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });

}
