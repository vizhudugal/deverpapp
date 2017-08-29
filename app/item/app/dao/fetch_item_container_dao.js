'use strict';
var bookshelf = require('../model/database');
var item_details_container_model=bookshelf.model('item_details_container_model');

exports.fetch_item_container_dao_fn =function(req,res,result){
  item_details_container_model.fetchAll()
  .then(function(data){
    result(data)
  }).catch(function(err){
    console.error(err);
    result(data)
  })
}
