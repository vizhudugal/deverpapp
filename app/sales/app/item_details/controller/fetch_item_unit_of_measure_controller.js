'use strict';

var fetch_item_unit_of_measure_dao = require('../dao/fetch_item_unit_of_measure_dao');

exports.fetch_item_unit_of_measure_fn = function(req,res){
  fetch_item_unit_of_measure_dao.fetch_item_unit_of_measure_dao_fn(req.query, res, function(result){
    res.json(result);
  });
};
