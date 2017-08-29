var create_supplier_dao=require('../dao/create_supplier_dao.js');
exports.create_supplier_contr_fn = function(req, res){
  create_supplier_dao.create_supplier_dao_fn(req.query,function(data){
  res.json({'datavalue':'success'});
  // console.log("result value "+JSON.stringify(data));
  });
};
