'use strict';
module.exports = function(app)
 {
  var create_quality_parameter_range_controller = require('../quality_parameter_range/controller/create_quality_parameter_range_controller');
  var fetch_quality_parameter_range_controller = require('../quality_parameter_range/controller/fetch_quality_parameter_range_controller');
  var update_quality_range_controller = require('../quality_parameter_range/controller/update_quality_range_controller');
  var delete_quality_range_controller = require('../quality_parameter_range/controller/delete_quality_range_controller');
  var fetch_quality_parameter_range_strat_controller = require('../quality_parameter_range/controller/fetch_quality_parameter_range_strat_controller');
  var fetch_quality_parameter_id_range_contr = require('../quality_parameter_range/controller/fetch_quality_parameter_id_range_contr');
  var fetch_range_contr = require('../quality_parameter_range/controller/fetch_range_contr');

   app.route('/quality_parameter_range')
   .post(create_quality_parameter_range_controller.create_quality_parameter_range_controller_fn)
   .get(fetch_quality_parameter_range_controller.fetch_quality_parameter_range_controller_fn)

   app.route('/update_quality_range')
   .get(update_quality_range_controller.update_quality_range_controller_fn)

   app.route('/delete_quality_range')
   .post(delete_quality_range_controller.delete_quality_range_controller_fn)

   app.route('/quality_parameter_range_strat')
   .get(fetch_quality_parameter_range_strat_controller.fetch_quality_parameter_range_strat_controller_fn)

   app.route('/fetch_quality_parameter_id_range')
   .get(fetch_quality_parameter_id_range_contr.fetch_quality_parameter_id_range_contr_fn)

   app.route('/fetch_range')
   .get(fetch_range_contr.fetch_range_contr_fn)

}

// app.route('/quality_parameter/quality_parameter_id')
//   .get(fetch_quality_parameter_controller.fetch_quality_parameter_controller)
