var save_cont_det_dao_model=require('../model/grn_model.js');
var bookshelf = require('../model/database');
var save_cont_det_extended_model = bookshelf.model('od_item_cont_det_extnd_model');
exports.save_cont_det_dao_fn= function(save_cont_det_data,result){
  console.log(JSON.stringify(save_cont_det_data));
  save_cont_det_extended_model.forge({inward_register_number:save_cont_det_data.grnnumber,
                container_type_id:save_cont_det_data.containerid,
                container_number:save_cont_det_data.Containerno,
                heat_number:save_cont_det_data.heat_no_val,
                batch_number:save_cont_det_data.btnoVal,
                quantity:save_cont_det_data.quantityVal,
                po_number:save_cont_det_data.po_number,
                po_date:save_cont_det_data.po_date,
                created_by:save_cont_det_data.created_by,
                created_on:null,
                updated_by:save_cont_det_data.updated_by,
                updated_on:null
                }).save()
  .then(function(save_cont_det_response){
    result(save_cont_det_response)
  })
  .catch(function (err) {
      console.log("Error: "+err);
  });
}
