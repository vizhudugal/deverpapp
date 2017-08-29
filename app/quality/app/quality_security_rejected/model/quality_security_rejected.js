 'use strict';
 var bookshelf = require('./database');
 var item_irn_security_rejected_model= bookshelf.Model.extend({
   tableName: 'od_item_irn_security_rejected',
 });
 module.exports = bookshelf.model('item_irn_security_rejected_model', item_irn_security_rejected_model);
