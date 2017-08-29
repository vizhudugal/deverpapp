module.exports = function(app){
    var fetch_sales_det_vehno_contr=require('../security_api/controller/fetch_sales_det_vehno_contr.js')
      app.route('/fetch_sales_det_vehno')
        .get(fetch_sales_det_vehno_contr.fetch_sales_det_vehno_contr_fn)
    var fetch_in_state_veh_contr=require('../security_api/controller/fetch_in_state_veh_contr.js')
      app.route('/fetch_in_state_veh')
        .get(fetch_in_state_veh_contr.fetch_in_state_veh_contr_fn)
    var fetch_sales_ord_contr=require('../security_api/controller/fetch_sales_ord_contr.js')
      app.route('/fetch_sales_ord')
        .get(fetch_sales_ord_contr.fetch_sales_ord_contr_fn)
    var save_sales_veh_map_contr=require('../security_api/controller/save_sales_veh_map_contr.js')
      app.route('/save_sales_veh_map')
        .post(save_sales_veh_map_contr.save_sales_veh_map_contr_fn)
        }
