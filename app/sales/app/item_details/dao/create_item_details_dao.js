'use strict';

var new_item_details_model = require('../model/item_model');
var bookshelf = require('../model/database');
var item_extended_model = bookshelf.model('item_extended_model');

exports.add_item_details_dao_fn = function(item, res, result){

  new_item_details_model.forge({
    item_name:item.itemnamevalue,
    status:item.statusvalue
  }).save()
  .then (function (item_id) {
    result(item_id);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
