var bookshelf = require('./database.js');

var od_pur_pur_register_extnd_model = bookshelf.Model.extend({
  tableName: 'od_purchase_purchase_register'
});
module.exports = bookshelf.model('od_pur_pur_register_extnd_model', od_pur_pur_register_extnd_model);
