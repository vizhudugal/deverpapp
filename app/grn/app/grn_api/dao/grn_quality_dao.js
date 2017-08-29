var bookshelf = require('../model/database');
exports.grn_quality_dao_fn = function(req,result){
          bookshelf.knex('md_procurement_item as T1')
          .join('od_wms_grn_item_register as T4')
          .join('md_procurement_supplier as T2', function () {
              this.on('T1.item_id', 'T4.item_id')
              .on('T2.supplier_id','T4.supplier_id');
            })
          .join('od_inward_register_invoice as T3','T3.inward_register_number','T4.inward_register_number')
          .select('T1.item_name','T1.item_id','T1.item_specification1','T2.supplier_name','T2.supplier_id','T3.*','T4.item_quantity','T4.container_quantity','T4.unit_of_measure_id','T4.container_type_id','T4.status','T4.po_number','T4.po_date')
          .where({'T4.status':'not_open'})
          .then(function(rows){
            result(rows);
          })
          .catch(function (err) {
            console.log(err);
            result(err);
          });
}
