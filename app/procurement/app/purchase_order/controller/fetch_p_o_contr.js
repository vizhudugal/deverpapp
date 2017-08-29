var fetch_p_o_dao=require('../dao/fetch_p_o_dao.js');
exports.fetch_p_o_contr_fn = function(req, res){
  // console.log("controller calling");
  // console.log(req.query);
  fetch_p_o_dao.fetch_p_o_dao_fn(function(data){
  res.json({'returnval':data});
  });
};
