var save_htno_btno_dao_model=require('../model/grn_model.js');
var bookshelf = require('../model/database');
var od_prod_htno_btno_map_extnd_model = bookshelf.model('od_prod_htno_btno_map_extnd_model');
exports.save_htno_btno_dao_fn= function(req,result){
  od_prod_htno_btno_map_extnd_model.forge({heat_number:req.heatno,
                                            batch_number:req.batchno,
                                            created_by:req.created_by,
                                            created_on:null,
                                            updated_by:req.updated_by,
                                            updated_on:null}).save()
  .then(function(save_htno_btno_response){
    result(save_htno_btno_response)
  })
  .catch(function (err) {
      console.log("Error: "+err);
  });
}
