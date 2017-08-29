'use strict';
var bookshelf = require('../model/database');
var item_model = require('../model/item_model.js');
var item_supplier_mapping_model=bookshelf.model('item_supplier_mapping_model');
var supplier_model = require('../model/supplier_model.js');
var supplier_md_extented_model=bookshelf.model('supplier_md_extented_model');

exports.map_item_supplier_dao_fn = function(details, res, result){
  // item_details_model.where({item_name:details.item_name}).fetch({columns:['item_id']})
  // .then(function(itemid){
  //   console.log(details.item_name+details.supplier_name);
  //   supplier_md_extented_model.where({supplier_name:details.supplier_name}).fetch({columns:['supplier_id']})
  //   .then(function(supplierid){
  //     console.log("supplierid testing"+JSON.stringify(itemid)+supplierid);
  //     console.log(itemid.concat(supplierid));
  //     console.log(itemid+supplierid);
  //     result(itemid.concat(supplierid))
  //   }).catch(function(err){result(err)})
  // }).catch(function(err){result(err)})
  // supplier_md_extented_model.where({supplier_name:details.supplier_name}).fetch({columns:['supplier_id']})
  // .then(function(supplierid){
  //   console.log("supplierid testing"+JSON.stringify(itemid)+supplierid);
  //   console.log(itemid.concat(supplierid));
  //   console.log(supplierid);
  //   result(itemid.concat(supplierid))
  // }).catch(function(err){result(err)})
  bookshelf.knex('md_procurement_item as t1').select('t1.item_id','t2.supplier_id')
  .innerJoin('md_procurement_supplier as t2').where({'item_name':details.item_name}).andWhere({'supplier_name':details.supplier_name})
  .then(function(data){
    // console.log(data[0].item_id+data[0].supplier_id);
    // result(data);
    item_supplier_mapping_model.forge({item_id:data[0].item_id,
                                       supplier_id:data[0].supplier_id,
                                       pricing:details.pricing,
                                       effective_date:details.date}).save()
                                       .then(function(status){
                                         result(status)
                                       })
                                       .catch(function(err){
                                         result(err)
                                       })
  })
}
