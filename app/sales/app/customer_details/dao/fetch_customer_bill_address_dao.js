var fetch_customer_details = require('../model/customer_model');
var bookshelf = require('../model/database');

exports.fetch_customer_bill_address_dao_fn = function(customer,res,result){
console.log("bill add dao"+JSON.stringify(customer));
  bookshelf.knex('md_sales_customer as t1').select('t3.*','t4.*','t5.state_name')
  .innerJoin('od_customer_bill_mapping as t2', 't2.customer_id', 't1.customer_id')
  .innerJoin('od_sales_customer_billing_address as t3', 't3.billing_id', 't2.billing_id')
  .innerJoin('md_country as t4', 't4.country_code', 't3.country_code')
  .innerJoin('md_state as t5', function () {
    this.on('t5.state_no', 't3.state_code')
      .on('t3.country_code', 't5.country_code');
  })
  .where({'t1.customer_name':customer.customername})

  .then (function (data) {
    console.log(data);
      result(data)
  })
  .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
      console.log(err);
  });
}
