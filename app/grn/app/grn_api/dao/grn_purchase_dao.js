var bookshelf = require('../model/database');
exports.grn_purchase_dao_fn = function(req,result){
          bookshelf.knex('md_procurement_item as T1')
          .join('od_inward_register as T4')
          .join('md_procurement_supplier as T2', function () {
              this.on('T1.item_id', 'T4.item_id')
              .on('T2.supplier_id','T4.supplier_id');
            })
          .join('od_inward_register_invoice as T3','T3.inward_register_number','T4.inward_register_number')
          .select('T1.item_name','T1.item_id','T1.item_specification1','T2.supplier_name','T3.*','T4.item_quantity','T4.container_quantity','T4.unit_of_measure_id','T4.container_id','T4.status','T4.po_number','T4.po_date')
          .where({'T4.status':'purchase'})
          .then(function(rows){
              result(rows);
              // console.log(rows.length);
          })
          .catch(function (err) {
            result(err);
          });
}
