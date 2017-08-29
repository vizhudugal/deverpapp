var pricing_strategy_dao=require('../dao/pricing_strategy_dao.js');
exports.pricing_strategy_contr_fn = function(req, res){
  // console.log(req);
  // console.log(req.query);
  pricing_strategy_dao.pricing_strategy_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
