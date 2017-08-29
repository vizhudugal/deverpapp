'use strict';

var bookshelf = require('../model/database');
var fetch_item_name_auto_dao = require('../dao/fetch_item_name_auto_dao');

exports.fetch_item_name_auto_controller_fn = function(req,res){
  fetch_item_name_auto_dao.fetch_item_name_auto_dao_fn(res, function(result){
  res.json(result);
  // console.log("result value "+result.id);
  });
};
