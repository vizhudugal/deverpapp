'use strict';
var bookshelf = require('../model/database');
var item_details_group_model=bookshelf.model('item_details_group_model');

exports.fetch_item_group_dao_fn =function(req,res,result){
  item_details_group_model.fetchAll()
  .then(function(data){
    result(data)
  }).catch(function(err){
    console.error(err);
    result(data)
  })
}
