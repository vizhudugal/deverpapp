'use strict';

var bookshelf = require('../model/database');
var fetch_item_dao = require('../dao/fetch_item_dao.js');

exports.fetch_item = function(req,res){
  fetch_item_dao.fetch_item_dao_fn(req.query, res, function(itemdetails,suppliers){
    if(itemdetails||suppliers!=null)
      res.status(200).json({'returnval':itemdetails,'returnval1':suppliers});
    else
      res.status(200).json({'returnval':"No Data"});
  });
};
