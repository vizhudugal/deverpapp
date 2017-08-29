'use strict';

var bookshelf = require('../model/database');
var fetch_ceo_item_model = require('../model/item_model.js');
var itemDetailsData=bookshelf.model('item_details_model');

exports.fetch_ceo_item_dao_fn =function(req,res,result){
   itemDetailsData.where({item_status: "Created"})
  .fetchAll()
  .then (function (status) {
      result(status)
  })
}
