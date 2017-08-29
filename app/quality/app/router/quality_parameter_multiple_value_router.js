'use strict';
module.exports = function(app)
 {
  // console.log("router");
  var create_quality_parameter_multiple_value_controller = require('../quality_parameter_multiple_value/controller/create_quality_parameter_multiple_value_controller');
  var fetch_quality_parameter_multiple_value_controller = require('../quality_parameter_multiple_value/controller/fetch_quality_parameter_multiple_value_controller');
  var delete_quality_multiple_value_controller = require('../quality_parameter_multiple_value/controller/delete_quality_multiple_value_controller');
  var update_quality_parameter_multiple_value_controller = require('../quality_parameter_multiple_value/controller/update_quality_parameter_multiple_value_controller');
  var fetch_quality_parameter_multiple_value_strat_controller = require('../quality_parameter_multiple_value/controller/fetch_quality_parameter_multiple_value_strat_controller');
  var fetch_qlty_id_multiple_value_contr = require('../quality_parameter_multiple_value/controller/fetch_qlty_id_multiple_value_contr');
  var fetch_multiple_value_contr = require('../quality_parameter_multiple_value/controller/fetch_multiple_value_contr');

  app.route('/quality_parameter_multiple_value')
  .post(create_quality_parameter_multiple_value_controller.create_quality_parameter_multiple_value_controller_fn)
  .get(fetch_quality_parameter_multiple_value_controller.fetch_quality_parameter_multiple_value_controller_fn)

  app.route('/delete_quality_multiple_value')
  .post(delete_quality_multiple_value_controller.delete_quality_multiple_value_controller_fn)

  app.route('/update_quality_multiple_value')
  .get(update_quality_parameter_multiple_value_controller.update_quality_parameter_multiple_value_controller_fn)

   app.route('/quality_parameter_multiple_value_strat')
   .get(fetch_quality_parameter_multiple_value_strat_controller.fetch_quality_parameter_multiple_value_strat_controller_fn)

   app.route('/fetch_quality_parameter_id_multiple_value')
   .get(fetch_qlty_id_multiple_value_contr.fetch_qlty_id_multiple_value_contr_fn)

    app.route('/fetch_multiple_value')
    .get(fetch_multiple_value_contr.fetch_multiple_value_contr_fn)

  }
