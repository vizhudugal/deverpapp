var bookshelf = require('./database.js');
// console.log("calling supplier_model");
// var supplier_account_extended_model = bookshelf.Model.extend({
//   tableName: 'md_procurement_supplier_account_details',
//   // idAttribute:'supplier_id',
//   supplier_account: function() {
//     return this.morphMany(supplier_md_extented_model,'supplier_md_fn');
//   }
// });
// var supplier_tax_extended_model = bookshelf.Model.extend({
//   tableName: 'md_procurement_supplier_tax_details',
//   // idAttribute:'supplier_id',
//   supplier_tax: function() {
//     return this.morphMany(supplier_md_extented_model,'supplier_md_fn');
//   }
// });
var supplier_md_extented_model=bookshelf.Model.extend({
  tableName:'md_procurement_supplier'
});

var od_sup_item_map_extented_model=bookshelf.Model.extend({
  tableName:'od_procurement_item_supplier_mapping'
});
// module.exports = bookshelf.model('supplier_account_extended_model', supplier_account_extended_model);
// module.exports = bookshelf.model('supplier_tax_extended_model', supplier_tax_extended_model);

module.exports = bookshelf.model('supplier_md_extented_model', supplier_md_extented_model);
module.exports = bookshelf.model('od_sup_item_map_extented_model', od_sup_item_map_extented_model);
