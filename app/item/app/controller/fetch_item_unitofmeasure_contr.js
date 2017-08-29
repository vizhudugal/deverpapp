'use strict';

var bookshelf = require('../model/database');
var fetch_item_unitofmeasure_dao = require('../dao/fetch_item_unitofmeasure_dao.js');

exports.fetch_item_unitofmeasure = function(req,res){
  fetch_item_unitofmeasure_dao.fetch_item_unitofmeasure_dao_fn(req.query, res, function(itemUnitofMeasures){
    res.status(200).json({'returnval':itemUnitofMeasures});
  });
};
