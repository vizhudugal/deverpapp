var bookshelf = require('../model/database');
exports.fetch_in_state_veh_dao_fn= function(result){
    bookshelf.knex('od_logistics_finishedgoods_vehicle_status_tracking').select()
    .where('vehicle_status','in')
      .then(function(fetch_in_state_veh_response){
        result(fetch_in_state_veh_response)
      })
      .catch(function (err) {
          console.log("Error: "+err);
      });
    }
