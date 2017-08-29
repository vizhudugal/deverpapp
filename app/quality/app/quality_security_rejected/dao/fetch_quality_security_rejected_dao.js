'use strict';
var bookshelf = require('../model/database');

exports.fetch_quality_security_rejected_dao_fn = function(quality_parameter, res, result){
  // console.log(quality_parameter.emp_id);
  bookshelf.knex('od_item_irn_security_rejected  as t1')
  .select(['t1.*','t2.item_name','t3.supplier_name','t4.reason_name'])
  .innerJoin('md_procurement_item as t2','t1.item_id','t2.item_id')
  .innerJoin('md_procurement_supplier as t3','t3.supplier_id','t1.supplier_id')
  .innerJoin('md_rejected_reason as t4','t4.reason_id','t1.reason_id')
  .where({'t1.rejected_status':'QA rejected'})
  .orWhere({'t1.rejected_status':'security rejected'})
  .whereNot({'t1.emp_id':quality_parameter.emp_id})
    .then (function (quality_parameter) {
      // console.log("fetch value"+JSON.stringify(quality_parameter));
      result(quality_parameter);
    })
    .catch(function (err) {
      result(err);
        // res.status(500).json({error: true, data: {message: err.message}});
        console.log("Error: "+err);
    });
}
