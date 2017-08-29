'use strict';

var new_quality_parameter_model = require('../model/quality_parameter_model');
var bookshelf = require('../model/database');
var quality_parameter_model = bookshelf.model('quality_parameter_model');

exports.create_quality_parameter_dao_fn = function(quality_parameter, res, result){
// console.log(quality_parameter.qualityidvalue);
// console.log(quality_parameter.qualitynamevalue);
  new_quality_parameter_model.forge({
      quality_parameter_name: quality_parameter.quality_parameter_name,
      quality_parameter_description:quality_parameter.quality_description,
      quality_parameter_flag:quality_parameter.quality_flag
  }).save()
  .then (function (quality_parameter) {
    result(quality_parameter)
    })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
// 'use strict';
//
// var new_quality_parameter_model = require('../model/quality_parameter_model');
// var bookshelf = require('../model/database');
// var quality_parameter_model = bookshelf.model('quality_parameter_model');
//
// exports.create_quality_parameter_dao_fn = function(quality_parameter, res, result){
// // console.log(quality_parameter.qualityidvalue);
// // console.log(quality_parameter.qualitynamevalue);
//
//     new_quality_parameter_model.forge({ quality_parameter_id:quality_parameter.qualityidvalue})
//     .fetch({require: true})
//     .then(function (user) {
//       user.destroy()
//       .then(function () {
//         res.json({error: true, data: {message: 'successfully deleted'}});
//       })
//       .catch(function (err) {
//         res.status(500).json({error: true, data: {message: err.message}});
//       });
//     })
//
// }
