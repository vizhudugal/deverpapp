'use strict';

var bookshelf = require('../model/database');
exports.update_quality_security_rejected_dao_fn = function(quality_parameter, res, result){
  console.log(JSON.stringify(quality_parameter));
bookshelf.knex('od_item_irn_security_rejected as t1')
.update({'t1.rejected_status':quality_parameter.rejected_status})
.where({'t1.inward_register_number':quality_parameter.inward_register_number,'t1.emp_id':quality_parameter.emp_id})
.then (function (quality_parameter) {
    console.log("updated");
    result(quality_parameter);
  })
  .catch(function (err) {
    result(err);
      // res.status(500).json({error: true, data: {message: err.message}});
      console.log("Error: "+err);
  });
}
