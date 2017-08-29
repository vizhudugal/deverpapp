var fetch_item_details = require('../model/item_model');
var bookshelf = require('../model/database');

exports.fetch_item_details_dao_fn = function(customer,res,result){
  bookshelf.knex('md_sales_finishedgoods_item as t1').select('t1.item_id','t1.item_name')
  .innerJoin('od_sales_item_customer_mapping as t2', 't2.item_id', 't1.item_id')
  .innerJoin('md_sales_customer as t3', 't3.customer_id', 't2.customer_id')
  .where({'t3.customer_name':customer.customername})
  .then (function (customer) {
  
      var array=[];
      for(var i=0;i<customer.length;i++){
        array.push({"text":customer[i].item_name,"value":customer[i].item_id});
      }
       result(array);
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log(err);
  });
}
