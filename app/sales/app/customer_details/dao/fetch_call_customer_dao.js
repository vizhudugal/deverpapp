var bookshelf = require('../model/database');

exports.fetch_call_customer_dao_fn = function(customer,res,result){
    bookshelf.knex('md_sales_customer as t1').select('t1.*')  
    .where({'t1.customer_name':customer.supname})

  .then (function (customer) {

    result(customer)
    })
  .catch(function (err) {
    console.log(err);
      result(err);
  });
}
