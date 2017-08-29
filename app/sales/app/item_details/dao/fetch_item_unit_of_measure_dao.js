var fetch_item_details = require('../model/item_model');
var bookshelf = require('../model/database');

exports.fetch_item_unit_of_measure_dao_fn = function(item,res,result){

  bookshelf.knex('md_item_unit_of_measure as t1').select('t1.unit_of_measure_id','t1.unit_of_measure_name')
  .innerJoin('md_sales_finishedgoods_item as t2', 't2.unit_of_measure_id', 't1.unit_of_measure_id')
  .where({'t2.item_name':item.itemname})

  .then (function (item) {
      res.json(item)
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log(err);
  });
}
