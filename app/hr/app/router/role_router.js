'use strict';
module.exports = function(app) {
  var rol_contr= require('../controller/rol_contr.js');

  app.route('/addrole')
  .post(rol_contr.create_rol)

  app.route('/searchrole')
  .get(rol_contr.fetch_rol)
}
