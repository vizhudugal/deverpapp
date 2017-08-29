var fetch_in_state_veh_dao=require('../dao/fetch_in_state_veh_dao.js');
exports.fetch_in_state_veh_contr_fn = function(req, res){
  fetch_in_state_veh_dao.fetch_in_state_veh_dao_fn(function(data){
  res.json({'returnval':data});
  });
};
