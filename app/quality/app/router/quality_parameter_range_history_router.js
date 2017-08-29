'use strict';
module.exports = function(app)
 {
  // console.log("router");
  var create_quality_parameter_controller = require('../quality_parameter/controller/create_quality_parameter_controller');
    // nodeDev Routes
  app.route('/quality_parameter')
  .post(create_quality_parameter_controller.create_quality_parameter_controller_fn)

}
