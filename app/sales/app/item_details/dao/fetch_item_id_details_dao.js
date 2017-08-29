var fetch_item_id_details = require('../model/item_model');
var bookshelf = require('../model/database');

exports.fetch_item_id_details_dao_fn = function(item,res,result){
  bookshelf.knex('md_sales_finishedgoods_item').select('*')
  .where('item_id',item.itemid)
  .then (function (item) {
       result(item)
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log(err);
  });
}
