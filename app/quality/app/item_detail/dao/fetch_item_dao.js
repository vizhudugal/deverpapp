'use strict';
var bookshelf = require('../model/database');
var fetch_item_model = require('../model/create_item_model.js');
var itemDetailsData=bookshelf.model('item_details_model');
// var itemDetailsContainer=bookshelf.model('item_details_container_model');
// exports.fetch_item_dao_fn = function(req,res,result){
// new item_container_model()
exports.fetch_item_dao_fn =function(req,res,result){
  // .where('item_name',"test")
  // console.log("itemdetails"+itemDetailsData);
   itemDetailsData.where({Item_ID: req.id}).fetch({withRelated:['frame']})
  .then (function (status) {
      result(status)
  })
  // itemDetailsData.query(function(e){
  //
  // }).innerJoin('item_containers',function(){}).fetchAll({withRelated:['frame.item_containers']})
  // .then(function(users){})
}
//   .catch(function (err) {
//       res.status(500).json({error: true, data: {message: err.message}});
//   });
// }

// var Promise = require('bluebird'),
//     User    = require('../model/database'),
//     knex, query;
//
// knex = User.prototype._builder(User.prototype.tableName);
//
// query = function (q) {
//     q.distinct()
//         .innerJoin('orders', function () {
//             this.on('users.id', '=', 'orders.user_id')
//                 .andOn('orders.amount', '>', 100);
//         })
//         .innerJoin('addresses', function () {
//             this.on('users.id', '=', 'addresses.user_id')
//                 .andOn('addresses.state', '=', 'New York');
//         });
//     return q;
// };
