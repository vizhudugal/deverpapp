var bookshelf = require('../model/database');
exports.fetch_item_p_o_no_dao_fn= function(req,result){
  bookshelf.knex('od_purchase_purchase_register')
  .select('purchase_order_number').where('item_id',req.item_id)
  .then(function(purchase_order_response){
    result(purchase_order_response)
  })
  .catch(function (err) {
    console.error(err);
    result("not get values")

  });
}
