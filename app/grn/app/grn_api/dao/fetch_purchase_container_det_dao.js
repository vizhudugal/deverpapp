var bookshelf = require('../model/database');
exports.fetch_purchase_container_det_dao_fn = function(req,result){
  bookshelf.knex('od_item_container as T1')
  .join('od_inward_register as T2')
  .select('T1.*','T2.po_number','T2.po_date','T2.status')
  .where({'T2.status':'purchase','T2.inward_register_number':req.searchgrn_number,'T1.inward_register_number':req.searchgrn_number})
          .then(function(rows){
              result(rows);
          })
          .catch(function (err) {
            console.log(err);
            result(err);
          });
}
