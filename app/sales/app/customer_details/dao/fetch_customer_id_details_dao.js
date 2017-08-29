var fetch_customer_id_details = require('../model/customer_model');
var bookshelf = require('../model/database');

exports.fetch_customer_id_details_dao_fn = function(customer,res,result){
  bookshelf.knex('md_sales_customer').select('*')
  .where('customer_id',customer.customerid)
  .then (function (customer) {
      result(customer)
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log(err);
  });
}
