var bookshelf = require('../model/database');

exports.fetch_customer_details_dao_fn = function(customer,res,result){
  bookshelf.knex('md_sales_customer').select('*')
  .then (function (customer) {
    var array=[];
    for(var i=0;i<customer.length;i++){
      array.push({"text":customer[i].customer_name,"value":customer[i].customer_id});
    }
    result(array)
    })
  .catch(function (err) {
    console.log(err);
      result(err);
  });
}
