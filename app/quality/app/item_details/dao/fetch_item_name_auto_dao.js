'use strict';
var bookshelf = require('../model/database');
var item_model = require('../model/item_model');
exports.fetch_item_name_auto_dao_fn =function(res,result){
  item_model.forge().fetchAll()
    .then (function (item_name) {
      // console.log(JSON.stringify(quality_parameter));
      result(item_name);
    })
    .catch(function (err) {
      result(err);
        // res.status(500).json({error: true, data: {message: err.message}});
        console.log("Error: "+err);
    });

}
