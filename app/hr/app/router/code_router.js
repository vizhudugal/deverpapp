'use strict';
module.exports = function(app) {
  var qrcode_contr = require('../controller/qrcode_contr.js');
  var barcode_contr = require('../controller/barcode_contr.js');

  app.route('/createqrcode')
  .post(qrcode_contr.create_qrcode)

  app.route('/searchqrcode')
  .get(qrcode_contr.fetch_qrcode)

  app.route('/createbarcode')
  .post(barcode_contr.create_barcode)

  app.route('/searchbarcode')
  .get(barcode_contr.fetch_barcode)
}
