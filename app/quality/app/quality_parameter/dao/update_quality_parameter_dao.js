'use strict';

var new_quality_parameter_model = require('../model/quality_parameter_model');
var bookshelf = require('../model/database');
var quality_parameter_model = bookshelf.model('quality_parameter_model');
exports.update_quality_parameter_dao_fn = function(quality_parameter, res, result){
new_quality_parameter_model.forge().update()
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
