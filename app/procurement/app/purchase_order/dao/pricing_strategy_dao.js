var bookshelf = require('../model/database');
exports.pricing_strategy_dao_fn= function(req,result){
  var tablename=req.tablename;
  var filedname=req.fieldname;
  var idname=req.idname;
  var itemid=req.itemid;
    bookshelf.knex(tablename).select('pricing').where(filedname,idname).andWhere('item_id',itemid)
    .then(function(rows){
      result(rows)
    })
    .catch(function(err){
      console.error(err);
      result(err)
    })
}
