

var fetch_vehicle_in_dao=require('../dao/fetch_vehicle_in_dao.js');

exports.fetch_vehicle_in_fn = function(req, res){
  
  fetch_vehicle_in_dao.fetch_vehicle_in_dao_fn(function(data){
      res.json({'returnval':data});
  });
};
