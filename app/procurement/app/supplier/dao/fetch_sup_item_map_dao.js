var sup_item_map_model = require('../../../../item/app/model/item_model.js');
var bookshelf = require('../../../../item/app/model/database.js');
var md_item_model = bookshelf.model('item_details_model');
exports.fetch_sup_item_map_dao_fn = function(req,result){
  md_item_model.forge({item_status:'active'}).fetchAll()
  .then (function (sup_item_map_fetch_data) {
      result(sup_item_map_fetch_data)
  })
  .catch(function (err) {
    result(err);
  });
}
