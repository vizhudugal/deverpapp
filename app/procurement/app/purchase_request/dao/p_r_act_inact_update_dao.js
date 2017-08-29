var bookshelf = require('../model/database');
exports.p_r_act_inact_update_dao_fn= function(purchase_request_data,result){
  bookshelf.knex('od_purchase_request_external as T1').update('status',purchase_request_data.respond).where('T1.purchase_request_number',purchase_request_data.intnumber)
  .then(function(purchase_request_response){
    // console.log(JSON.stringify(purchase_request_response,null,1));
    result(purchase_request_response);
  })
  .catch(function (err) {
    console.log("Error: "+err);
    result("not get values");
  });
}
