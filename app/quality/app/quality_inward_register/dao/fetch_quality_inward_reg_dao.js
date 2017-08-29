'use strict';

var bookshelf = require('../model/database');
var quality_inward_reg_model = require('../model/quality_inward_reg');

exports.fetch_quality_inward_reg_dao_fn = function( res, result){
quality_inward_reg_model.fetchAll().where({
  qlty_inward_reg_id:quality_parameter.qlty_inward_reg_id
}).fetchAll()
  .then (function (quality_parameter) {
    // console.log(JSON.stringify(quality_parameter));
    result(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
