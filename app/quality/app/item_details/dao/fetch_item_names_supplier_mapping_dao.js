'use strict';
var bookshelf = require('../model/database');

exports.fetch_item_names_supplier_mapping_dao_fn =function(req,res,result){
  bookshelf.knex.select('item_name').from('md_procurement_item')
  .then(function(data){
    bookshelf.knex.select('item_name').from('md_sales_finishedgoods_item')
    .then(function(data1){
      result(data.concat(data1));
    })
  })
  .catch(function(err){
    result(err);
  })
}
