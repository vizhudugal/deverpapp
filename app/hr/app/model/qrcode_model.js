'use strict';
var bookshelf = require('./database');

var od_qrcode_model = bookshelf.Model.extend({
  tableName: 'od_qrcode',
});
module.exports = bookshelf.model('od_qrcode_model', od_qrcode_model);
