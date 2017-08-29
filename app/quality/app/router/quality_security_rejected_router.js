'use strict';
module.exports = function(app)
 {
  // console.log("router");
  var create_quality_security_rejected_controller = require('../quality_security_rejected/controller/create_quality_security_rejected_controller');
  var fetch_quality_security_rejected_controller = require('../quality_security_rejected/controller/fetch_quality_security_rejected_controller');
  var update_quality_security_rejected_controller = require('../quality_security_rejected/controller/update_quality_security_rejected_controller');

  app.route('/quality_security_rejected')
  .post(create_quality_security_rejected_controller.create_quality_security_rejected_controller_fn)
  .get(fetch_quality_security_rejected_controller.fetch_quality_security_rejected_controller_fn)


  app.route('/quality_security_rejected_update')
  .post(update_quality_security_rejected_controller.update_quality_security_rejected_controller_fn)


}
