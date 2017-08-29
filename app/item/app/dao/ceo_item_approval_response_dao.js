'use strict';
var database = require('../model/database');

exports.ceo_item_approval_response_dao_fn = function(details, res, result){
  if(details.itemtypeid=="FG"){
    database.knex('md_sales_finishedgoods_item').update({item_status: details.respond})
    .where({item_id: details.itemid})
    .then(function(status){
      if (status==1) {
        result("Response Sent!");
      }
      else {
        result("Response Not Sent!");
      }
    })
    .catch(function(err){
      console.error(err);
      result(err);
    })
  }
  else {
    database.knex('md_procurement_item').update({item_status: details.respond})
    .where({item_id: details.itemid})
    .then(function(status){
      if (status==1) {
        result("Response Sent!");
      }
      else {
        result("Response Not Sent!");
      }
    })
    .catch(function(err){
      console.error(err);
      result(err);
    })
  }
}
