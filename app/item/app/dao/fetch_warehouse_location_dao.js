'use strict';
var bookshelf = require('../model/database');
var item_details_warehouse_model=bookshelf.model('item_details_warehouse_model');

exports.fetch_warehouse_dao_fn =function(req,res,result){
  item_details_warehouse_model.fetchAll()
  .then(function(data){
    result(data)
  }).catch(function(err){
    console.error(err);
    result(data)
  })
}
