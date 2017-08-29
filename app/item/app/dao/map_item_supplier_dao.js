'use strict';
var database = require('../model/database');
var item_model = require('../model/item_model.js');
var item_supplier_mapping_model=database.model('item_supplier_mapping_model');
// var supplier_model = require('../model/supplier_model.js');
// var supplier_md_extented_model=bookshelf.model('supplier_md_extented_model');

exports.map_item_supplier_dao_fn = function(details, res, result){
    item_supplier_mapping_model.forge({item_id:details.itemid,
                                       supplier_id:details.supplierid,
                                       pricing:details.pricing,
                                       effective_date:null,
                                       created_by:details.createdby,
                                       created_on:null,
                                       updated_by:details.updatedby,
                                       updated_on:null})
     .save()
     .then(function(status){
       if(status.id==0){
         result("Supplier Added");
       }
       else {
         result("Supplier not Added!");
       }
     })
     .catch(function(err){
       result("Error!Supplier not Added.");
     })
  // bookshelf.knex('md_procurement_item as t1').select('t1.item_id','t2.supplier_id')
  // .innerJoin('md_procurement_supplier as t2').where({'item_name':details.item}).andWhere({'supplier_name':details.supplier})
  // .then(function(data){
  //   item_supplier_mapping_model.forge({item_id:data[0].item_id,
  //                                      supplier_id:data[0].supplier_id,
  //                                      pricing:details.pricing,
  //                                      effective_date:details.date})
  //    .save()
  //    .then(function(status){
  //      if(status.id==0){
  //        result("Supplier Added");
  //      }
  //      else {
  //        result("Supplier not Added!");
  //      }
  //    })
  //    .catch(function(err){
  //      result("Error!Supplier not Added.");
  //    })
  // })
}
