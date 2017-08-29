
var update_cont_to_qual_test_dao=require('../dao/update_cont_to_qual_test_dao.js');
exports.update_cont_to_qual_test_contr_fn = function(req, res){
  update_cont_to_qual_test_dao.update_cont_to_qual_test_dao_fn(req.query,function(data){
  res.json({'returnval':data});
  });
};
