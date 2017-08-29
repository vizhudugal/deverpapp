var fetch_inspect_size_dao=require('../dao/fetch_inspect_size_dao.js');
exports.fetch_inspect_size_contr_fn = function(req, res){
  console.log("fetch_inspect_size_contr calling"+req.query);
  fetch_inspect_size_dao.fetch_inspect_size_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
