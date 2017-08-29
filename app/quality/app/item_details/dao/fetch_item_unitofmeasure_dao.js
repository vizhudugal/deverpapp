'use strict';
var bookshelf = require('../model/database');
var item_details_unit_of_measure_model=bookshelf.model('item_details_unit_of_measure_model');

exports.fetch_item_unitofmeasure_dao_fn =function(req,res,result){
  item_details_unit_of_measure_model.fetchAll()
  .then(function(data){
    result(data)
  }).catch(function(err){
    console.error(err);
    result(data)
  })
}
