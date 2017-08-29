
var fetch_item_p_o_no_dao=require('../dao/fetch_item_p_o_no_dao.js');
exports.fetch_item_p_o_no_contr_fn = function(req, res){
  fetch_item_p_o_no_dao.fetch_item_p_o_no_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
