var save_sup_item_map_dao=require('../dao/save_sup_item_map_dao.js');
exports.save_sup_item_map_contr_fn = function(req, res){
  // console.log(req.body.snameval);
  save_sup_item_map_dao.save_sup_item_map_dao_fn(req.query,function(data){
  res.json({'returnval':'success'});
  console.log("result value "+JSON.stringify(data));
  });
};
