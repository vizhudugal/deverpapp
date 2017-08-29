module.exports = function(app){

    var grn_wms_contr=require('../grn_wms_api/controller/grn_wms_contr.js')
      app.route('/stores')
        .get(grn_wms_contr.grn_wms_contr_fn)
      }
