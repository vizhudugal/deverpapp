var bookshelf = require('../model/database');
exports.update_cont_det_dao_fn = function(req,result){
  if(req.db_update_name=='stores'){
    bookshelf.knex('od_wms_grn_item_register')
    .update({'accepted_container_quantity':req.updatecontaineriquantitycount,
            'accepted_item_quantity':req.updateitemquantity,
            'po_number':req.po_number,
            'po_date':req.po_date,
            'status':'not_open'})
            .where({'inward_register_number':req.updategrnnumber,'status':'item_received'})
        .then(function(data){
           result("updated")
        })
        .catch(function(err){
          console.error(err);
          result("not updated")
        })
  }
  console.log(req.db_update_name);
  if(req.db_update_name=='quality'){
    console.log(req.conFncheck);
    if(req.conFncheck=="pass"){
        bookshelf.knex('od_wms_grn_item_register')
        .update({'accepted_container_quantity':req.updatecontaineriquantitycount,
                'accepted_item_quantity':req.updateitemquantity,
                'status':'open'})
                .where({'inward_register_number':req.updategrnnumber})
            .then(function(data){
               result("updated")
            })
            .catch(function(err){
              console.error(err);
              result("not updated")
            })
      }
      if(req.conFncheck=="fail"){
          bookshelf.knex('od_wms_grn_item_register')
          .update({'accepted_container_quantity':req.updatecontaineriquantitycount,
                  'accepted_item_quantity':req.updateitemquantity,
                  'status':'not_open'})
                  .where({'inward_register_number':req.updategrnnumber})
              .then(function(data){
                 result("updated")
              })
              .catch(function(err){
                console.error(err);
                result("not updated")
              })
        }
      }

}
// exports.update_cont_det_dao_fn = function(req,result){
//   bookshelf.knex('od_wms_grn_item_register').select()
//   .where({'status':req.db_update_name,'inward_register_number':req.updategrnnumber})
//           .then(function(getrows){
//             if(getrows.length>0){
//               bookshelf.knex('od_wms_grn_item_register')
//               .update('status',req.db_update_name+"_history")
//               .where({'inward_register_number':req.updategrnnumber,'status':req.db_update_name})
//               .then(function(data){
//                 bookshelf.knex('od_wms_grn_item_register').insert([getrows[0]])
//                 .then(function(data){
//                   if(req.db_update_name=='stores'){
//                     bookshelf.knex('od_wms_grn_item_register')
//                     .update({'accepted_container_quantity':req.updatecontaineriquantitycount,
//                             'accepted_item_quantity':req.updateitemquantity,
//                             'po_number':req.po_number,
//                             'po_date':req.po_date,
//                             'status':'not_open'})
//                             .where({'inward_register_number':req.updategrnnumber,'status':'item_received'})
//                         .then(function(data){
//                            result("updated")
//                         })
//                         .catch(function(err){
//                           console.error(err);
//                           result("not updated")
//                         })
//                   }
//                   if(req.db_update_name=='quality'){
//                     bookshelf.knex('od_wms_grn_item_register')
//                     update({'accepted_container_quantity':req.updatecontaineriquantitycount,
//                             'accepted_item_quantity':req.updateitemquantity,
//                             'status':'not_open'})
//                             .where({'inward_register_number':req.updategrnnumber,'status':'open'})
//                         .then(function(data){
//                            result("updated")
//                         })
//                         .catch(function(err){
//                           console.error(err);
//                           result("not updated")
//                         })
//                   }
//                   if(req.db_update_name=='purchase'){
//                     bookshelf.knex('od_wms_grn_item_register')
//                     update({'accepted_container_quantity':req.updatecontaineriquantitycount,
//                             'accepted_item_quantity':req.updateitemquantity,
//                             'status':'active'})
//                             .where({'inward_register_number':req.updategrnnumber,'status':req.db_update_name})
//                         .then(function(data){
//                           // if(!err){
//                             bookshelf.knex('od_item_inventory')
//                             .join('od_wms_grn_item_register','od_wms_grn_item_register.item_id','od_item_inventory.item_id').select('od_item_inventory.*')
//                             .where({'od_wms_grn_item_register.inward_register_number':req.updategrnnumber,'od_wms_grn_item_register.status':'purchase_history'}) //,function(err,rows){
//                               .then(function(rows){//if(!err){
                                // var content=Number(rows[0].item_available_quantity)+Number(req.updateitemquantity);
//                                 bookshelf.knex('od_item_inventory').update('item_available_quantity',content)
//                                 .where('item_id',rows[0].item_id)//,function(err,result){
//                                   .then(function(data){
//                                     result("updated");
//                                   })
//                                 // });
//                               })// }
//                               .catch(function(){//select item_id
//                                 bookshelf.knex('od_wms_grn_item_register').select('od_wms_grn_item_register.item_id')
//                                 .where('inward_register_number',req.updategrnnumber)//,function(err,rows){
//                                   .then(function(rows){
//                                     bookshelf.knex('od_item_inventory').insert({'item_id':rows[0].item_id,'item_available_quantity':req.updateitemquantity})//,function(err,result){
//                                       .then(function(data){
//                                         result("insert content into od_item_inventory table");
//                                       })
//                                       .catch(function(err){
//                                         console.error(err);
//                                         result("doesn't insert content into od_item_inventory table");
//                                       });
//                                     });
//                                   });
//                                 });
//                               }
//                             // });
//                             // return callback("updated");
//                           // }
//                         })
//                         .catch(function(err){
//                           console.error(err);
//                           result("not updated")
//                         })
//                   });
//                 }
//               })
//             }
// // }
