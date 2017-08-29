var bookshelf = require('./database.js');

// var save_inv_det_extnd_model = bookshelf.Model.extend({
//   tableName: 'od_inward_register_invoice'
// });
// module.exports = bookshelf.model('save_inv_det_extnd_model', save_inv_det_extnd_model);

var od_sales_veh_map_extnd_model = bookshelf.Model.extend({
  tableName: 'od_logistics_vehicle_salesorder_mapping'
});
module.exports = bookshelf.model('od_sales_veh_map_extnd_model', od_sales_veh_map_extnd_model);
