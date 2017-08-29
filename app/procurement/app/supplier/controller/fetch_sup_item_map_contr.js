var fetch_sup_item_map_dao=require('../dao/fetch_sup_item_map_dao');
exports.fetch_sup_item_map_contr_fn=function(req,res,result){
  // console.log(req);
  fetch_sup_item_map_dao.fetch_sup_item_map_dao_fn(req.query,function(result){
      res.json({'returnval':result});
  })
}
