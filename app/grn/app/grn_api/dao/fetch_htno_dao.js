var bookshelf = require('../model/database');
exports.fetch_htno_dao_fn = function(req,result){
  console.log(req.heatno);
  bookshelf.knex('od_production_heatnumber_batchnumber_mapping')
  .select().where('heat_number',req.heatno)
          .then(function(rows){
            console.log("then"+JSON.stringify(rows));
            if(rows.length>0){
              console.log("first"+JSON.stringify(rows));
              result(rows);
            }
            else {
              bookshelf.knex('service_id_auto_generate').select('id')
              .where('dummyfield','x')
              .then(function(retrievedData){
                if(retrievedData.length>0){
                  for(var i=0;retrievedData.length>i;i++){
                    retrievedData[0].id++;
                  }
                  bookshelf.knex('service_id_auto_generate').update('id',retrievedData[0].id)
                  .where('dummyfield','x')
                  .then(function(data){
                    // console.log(JSON.stringify(retrievedData));
                    result(retrievedData);
                  })
                  .catch(function(err){
                    console.error(err);
                  })
                }
                else {
                  console.log("Error:"+err);
                  result("No ID Found to Generate");
                }
              })
            }
          })
          .catch(function (err) {
            console.log("catch");
            // bookshelf.knex('service_id_auto_generate').select('id')
            // .where('dummyfield','x')
            // .then(function(retrievedData){
            //   if(retrievedData.length>0){
            //     for(var i=0;retrievedData.length>i;i++){
            //       retrievedData[0].id++;
            //     }
            //     bookshelf.knex('service_id_auto_generate').update('id',retrievedData[0].id)
            //     .where('dummyfield','x')
            //     .then(function(data){
            //       console.log(JSON.stringify(data));
            //       result(data);
            //     })
            //     .catch(function(err){
            //       console.error(err);
            //     })
            //   }
            //   else {
            //     console.log("Error:"+err);
            //     result("No ID Found to Generate");
            //   }
            // })
          });
}
