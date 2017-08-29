'use strict';
module.exports = function(app)
 {
  var create_qual_item_result_contr = require('../quality_item_result/controller/create_qual_item_result_contr');
  var fetch_qual_item_result_contr = require('../quality_item_result/controller/fetch_qual_item_result_contr');
  // nodeDev Routes
  app.route('/quality_item_result')
  .post(create_qual_item_result_contr.create_qual_item_result_contr_fn)
  .get(fetch_qual_item_result_contr.fetch_qual_item_result_contr_fn)
}
