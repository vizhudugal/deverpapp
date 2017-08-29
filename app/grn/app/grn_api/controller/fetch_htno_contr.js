var fetch_htno_dao=require('../dao/fetch_htno_dao.js');
exports.fetch_htno_contr_fn = function(req, res){
  console.log("fetch_htno_contr calling"+JSON.stringify(req.query));
  fetch_htno_dao.fetch_htno_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
