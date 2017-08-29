var bookshelf = require('../model/database');
exports.save_qlty_reg_dao_fn = function(req,result){
          bookshelf.knex('qlty_inward_register').insert({
                                                          item_id:req.itemid,
                                                          grn_id:req.grn_number,
                                                          container_type_id:req.container_type_id,
                                                          container_id:req.cont_num,
                                                          item_quantity:req.quantity,
                                                          created_by:req.created_by,
                                                          created_on:null,
                                                          updated_by:req.updated_by,
                                                          updated_on:null})

          .then(function(data){
            result("data saved in quality register");
          })
          .catch(function (err) {
            console.log(err);
            result("data not saved");
          });
}
