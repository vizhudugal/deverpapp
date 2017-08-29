'use strict';

var bookshelf = require('../model/database');
var fetch_item_container_dao = require('../dao/fetch_item_container_dao.js');

exports.fetch_item_container = function(req,res){
  fetch_item_container_dao.fetch_item_container_dao_fn(req.query, res, function(itemcontainers){
    res.status(200).json({'returnval':itemcontainers});
  });
};
