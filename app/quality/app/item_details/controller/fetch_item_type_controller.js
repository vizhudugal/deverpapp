'use strict';

var bookshelf = require('../model/database');
var fetch_item_type_dao = require('../dao/fetch_item_type_dao.js');

exports.fetch_item_type = function(req,res){
  fetch_item_type_dao.fetch_item_type_dao_fn(req.query, res, function(itemtypes){
    res.status(200).json({'returnval':itemtypes});
  });
};
