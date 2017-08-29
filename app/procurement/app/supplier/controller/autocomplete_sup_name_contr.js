var autocomplete_sup_name_dao=require('../dao/autocomplete_sup_name_dao.js');
exports.autocomplete_sup_name_contr_fn = function(req, res){
  autocomplete_sup_name_dao.autocomplete_sup_name_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  // console.log("result value "+JSON.stringify(data,null,1));
  });
};
