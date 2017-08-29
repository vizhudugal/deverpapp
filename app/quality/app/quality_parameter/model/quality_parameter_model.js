
 'use strict';
 var bookshelf = require('./database');

 var quality_param_model= bookshelf.Model.extend({

   tableName: 'md_quality_parameter',

 });

 module.exports = bookshelf.model('quality_param_model', quality_param_model);

 // 'use strict';
 // var bookshelf = require('./database');
 // //
 // // var quality_parameter_extended_model= bookshelf.Model.extend({
 // //
 // //   tableName: 'md_quality_parameter',
 // //
 // // });
 // //
 // // module.exports = bookshelf.model('qualiy_extended_model', quality_parameter_extended_model);
 // // *********associated model**********
 // var quality_parameter_multiple_value_model  = bookshelf.Model.extend({
 //   tableName: 'od_quality_param_strat_multiple_value_map',
 //     quality_parameter_multiple_value_model_fn: function() {
 //       return this.morphMany(quality_extended_model, 'quality_parameter_multiple_value_model_fn');
 //     }
 // });
 //
 // var quality_parameter_range_model = bookshelf.Model.extend({
 //   tableName: 'od_quality_param_strat_range_map',
 //     quality_parameter_range_model_fn: function() {
 //       return this.morphMany(quality_extended_model, 'quality_parameter_range_model_fn');
 //     }
 // });
 //
 // var quality_parameter_model = bookshelf.Model.extend({
 //   tableName: 'md_quality_parameter',
 //   // idAttribute: "customer_id",
 //   quality_parameter_model: function() {
 //     return this.morphTo('quality_parameter_model_fn',quality_parameter_multiple_value_model,quality_parameter_range_model);
 //   }
 // });
 //  module.exports = bookshelf.model('quality_parameter_multiple_value_model', quality_parameter_multiple_value_model);
 //  module.exports = bookshelf.model('quality_parameter_range_model', quality_parameter_range_model);
 //  module.exports = bookshelf.model('quality_parameter_model', quality_parameter_model);
