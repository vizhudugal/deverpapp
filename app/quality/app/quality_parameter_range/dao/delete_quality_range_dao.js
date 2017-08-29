'use strict';

var bookshelf = require('../model/database');
exports.delete_quality_range_dao_fn = function(quality_parameter, res, result){
bookshelf.knex('od_quality_param_strat_range_map').where('quality_parameter_id', quality_parameter.quality_parameter_id).del()

  .then (function (quality_parameter) {
    console.log(quality_parameter);
    result(quality_parameter);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}

// 'use strict';
// var delete_quality_range_model = require('../model/delete_quality_range_model');
// var bookshelf = require('../model/database');
// exports.delete_quality_range_dao_fn = function(quality_parameter, res, result){
// delete_quality_range_model.forge({
//                         quality_parameter_id:quality_parameter.quality_parameter_id,
//                       })
//                       .fetch({require: true})
//                       .then(function (quality_parameter_id) {
//                            quality_parameter_id.destroy()
//                            .then(function () {
//                              res.json({error: true, data: {message: 'successfully deleted'}});
//                            })
//                         .catch(function (err) {
//                           console.log(err);
//                           res.status(500).json({error: true, data: {message: err.message}});
//                         // });
//                       })
//  })
//  }
// //     new_quality_parameter_model.forge({ quality_parameter_id:quality_parameter.qualityidvalue})
// //     .fetch({require: true})
// //     .then(function (user) {
// //       user.destroy()
// //       .then(function () {
// //         res.json({error: true, data: {message: 'successfully deleted'}});
// //       })
