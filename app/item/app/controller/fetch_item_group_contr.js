'use strict';

var bookshelf = require('../model/database');
var fetch_item_group_dao = require('../dao/fetch_item_group_dao.js');

exports.fetch_item_group = function(req,res){
  fetch_item_group_dao.fetch_item_group_dao_fn(req.query, res, function(itemgroups){
    res.status(200).json({'returnval':itemgroups});
  });
};
