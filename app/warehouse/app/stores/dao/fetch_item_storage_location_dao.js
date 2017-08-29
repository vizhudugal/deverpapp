'use strict';

var bookshelf = require('../model/database');
var itemStorage=bookshelf.model('item_storage_location');

exports.fetch_item_storage_location_dao_fn =function(req,res,result){
   itemStorage.where({item_id: req.data}).fetch()
  .then (function (status) {
      result(status)
  })
}
