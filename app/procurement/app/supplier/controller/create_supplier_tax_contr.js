var create_supplier_tax_dao=require('../dao/create_supplier_tax_dao.js');
exports.create_supplier_tax_contr_fn = function(req, res){
  console.log(req.body);
  create_supplier_tax_dao.create_supplier_tax_dao_fn(req.query,function(data){
  res.json({'datavalue':'success'});
  // console.log("result value "+JSON.stringify(data));
  });
};
