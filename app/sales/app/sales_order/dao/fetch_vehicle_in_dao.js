
var bookshelf = require('../model/database');

exports.fetch_vehicle_in_dao_fn= function(result){
    console.log("vehicle fetch dao calling");
  bookshelf.knex('od_logistics_finishedgoods_vehicle_status_tracking').select()
  .where('vehicle_status','in')
    .then(function(fetch_in_state_veh_response){
      console.log(JSON.stringify(fetch_in_state_veh_response,null,1));
      result(fetch_in_state_veh_response)
    })
    .catch(function (err) {
        console.log("Error: "+err);
    });
  }
