var bookshelf = require('./database.js');
var supplier_tax_extended_model_fetchall = bookshelf.Model.extend({
  tableName: 'md_procurement_supplier_tax',
  idAttribute:'supplier_id',
  supplier_tax_fn:function(){
    return this.belongsTo(supplier_md_extented_model_fetchall,'supplier_id')
  }
  // hasTimestamps: false
});
module.exports = bookshelf.model('supplier_tax_extended_model_fetchall', supplier_tax_extended_model_fetchall);

var md_procurement_supplier_account = bookshelf.Model.extend({
  tableName: 'md_procurement_supplier_account',
  // idAttribute:'supplier_id',
  // // hasTimestamps: true,
  //
  // supplier_account_fn: function() {
  //   return this.belongsTo(supplier_address_extended_model_fetchall,'supplier_id');
  // }
});
module.exports = bookshelf.model('md_procurement_supplier_account', md_procurement_supplier_account);

var md_procurement_supplier=bookshelf.Model.extend({
  tableName:'md_procurement_supplier',
//   // idAttribute:'supplier_id',
supplier_md_fn: function() {
  console.log("model calling");
return this.hasMany(md_procurement_supplier_account);
}
});
module.exports = bookshelf.model('md_procurement_supplier', md_procurement_supplier);
//
