var bookshelf = require('./database.js');

var od_item_cont_det_extnd_model = bookshelf.Model.extend({
  tableName: 'od_item_container'
});
module.exports = bookshelf.model('od_item_cont_det_extnd_model', od_item_cont_det_extnd_model);

var od_prod_htno_btno_map_extnd_model = bookshelf.Model.extend({
  tableName: 'od_production_heatnumber_batchnumber_mapping'
});
module.exports = bookshelf.model('od_prod_htno_btno_map_extnd_model', od_prod_htno_btno_map_extnd_model);
