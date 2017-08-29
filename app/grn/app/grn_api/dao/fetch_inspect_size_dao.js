var bookshelf = require('../model/database');
  exports.fetch_inspect_size_dao_fn = function(req,result){
    bookshelf.knex('inspection_sample_size')
    .select().where({item_id:req.itemid,supplier_id:req.supplierid})
    .then(function(rows){
      result(rows)
    })
    .catch(function(err){
      console.log(err);
      result("not get rows")
    })
  }
