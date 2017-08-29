var bookshelf = require('../model/database');
exports.update_cont_to_qual_test_dao_fn = function(req,result){
  bookshelf.knex('od_quality_item_test_result')
  .insert({inward_register_number:req.grnnumber,
          container_no:req.cntnoVal,
          test_id:req.qid})
          .then(function(rows){
              result("saved");
          })
          .catch(function (err) {
            console.error(err);
            result("not saved");
          });
}
