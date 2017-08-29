'use strict';
var database = require('../model/database');

exports.fetch_supplierNameID_dao_fn =function(req,res,result){
  database.knex('md_procurement_supplier').select('*')
  .then(function(suppliernames){
    var suppliernamesArray = new Array();
    for (var i = 0; i < suppliernames.length; i++) {
      suppliernamesArray.push({text:suppliernames[i].supplier_name,value:suppliernames[i].supplier_id});
    }
    result(suppliernamesArray);
  })
  .catch(function(err){
    console.error(err);
    result(err);
  })
}
