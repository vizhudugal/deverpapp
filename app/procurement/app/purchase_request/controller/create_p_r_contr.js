var create_p_r_dao=require('../dao/create_p_r_dao.js');
exports.create_p_r_contr_fn = function(req, res){
  // console.log(req.body);
  create_p_r_dao.create_p_r_dao_fn(req.query,function(data){
  res.json({'returnval':'data saved'});
  // console.log("result value "+JSON.stringify(data));
  });
};
