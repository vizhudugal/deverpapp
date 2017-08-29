var bookshelf = require('./database.js');

var supplier_account_extended_model = bookshelf.Model.extend({
  tableName: 'md_procurement_supplier_account',
}); module.exports = bookshelf.model('supplier_account_extended_model', supplier_account_extended_model);

var supplier_tax_extended_model = bookshelf.Model.extend({
  tableName: 'md_procurement_supplier_tax',
}); module.exports = bookshelf.model('supplier_tax_extended_model', supplier_tax_extended_model);

var supplier_md_extented_model=bookshelf.Model.extend({
  tableName:'md_procurement_supplier',
}); module.exports = bookshelf.model('supplier_md_extented_model', supplier_md_extented_model);
