'use strict';
var database = require('../model/database');
var item_details_model_pg=database.model('item_details_model_pg');
var item_extended_model_fg=database.model('item_extended_model_fg');

exports.fetch_itemNameID_dao_fn =function(req,res,result){
  database.knex('md_procurement_item').select('*')
  .then(function(pgitems){
    database.knex('md_sales_finishedgoods_item').select('*')
    .then(function(fgitems){
      var items= new Array();
      for (var i = 0; i < pgitems.length; i++) {
        items.push({text:pgitems[i].item_name,value:pgitems[i].item_id});
      }
      for (var i = 0; i < fgitems.length; i++) {
        items.push({text:fgitems[i].item_name,value:fgitems[i].item_id});
      }
      result(items);
    })
    .catch(function(err){
      console.error(err);
      result(err);
    })
  })
  .catch(function(err){
    console.error(err);
    result(err);
  })
}
