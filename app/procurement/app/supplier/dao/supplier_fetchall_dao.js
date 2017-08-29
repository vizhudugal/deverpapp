var supplier_model = require('../model/supplier_fetchall_model');
var bookshelf = require('../model/database');
var connectionValues=bookshelf.knex.client.connectionSettings;
var mysql = require('mysql');
var connection=mysql.createConnection(connectionValues);

exports.supplier_fetchall_dao_fn = function(supplier_fetchall_data,result){
  // console.log(supplier_fetchall_data.supplier_id);
    bookshelf.knex('md_procurement_supplier').join('md_procurement_supplier_account','md_procurement_supplier_account.supplier_id','md_procurement_supplier.supplier_id')
    .join('md_procurement_supplier_address','md_procurement_supplier_address.supplier_id','md_procurement_supplier.supplier_id')
    .join('md_procurement_supplier_tax','md_procurement_supplier_tax.supplier_id','md_procurement_supplier.supplier_id').select('*').where('md_procurement_supplier.supplier_id',supplier_fetchall_data.supplier_id)
      // select * from md_procurement_supplier as T1 join md_procurement_supplier_account as T2 on T1.supplier_id=T2.supplier_id join md_procurement_supplier_address as T3 on T1.supplier_id=T3.supplier_id join md_procurement_supplier_tax as T4 on T1.supplier_id=T4.supplier_id where T1.supplier_id='"+supplier_fetchall_data.supplier_id+"'
      .then(function(supplier_fetchall_data){
        // console.log(JSON.stringify(supplier_fetchall_data,null,1));
        result(supplier_fetchall_data)
      })
      .catch(function (err) {
        result(supplier_fetchall_data)
        console.log("Error: "+err);
      });
}
