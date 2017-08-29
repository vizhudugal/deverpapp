'use strict';
var bookshelf = require('../model/database');
var storesContainer=bookshelf.model('stores_container');

exports.fetch_stores_container_dao_fn =function(req,res,result){
   storesContainer.where({id:req.data}).fetch()
  .then (function (status) {
      result(status)
  })
}
