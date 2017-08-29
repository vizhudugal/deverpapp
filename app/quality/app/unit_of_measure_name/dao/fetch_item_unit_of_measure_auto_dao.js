var unit_of_measure_model = require('../model/unit_of_measure_model');
var bookshelf = require('../model/database');

exports.fetch_item_unit_of_measure_auto_dao_fn = function(res,result){
unit_of_measure_model.fetchAll()
.then (function (item) {
  // console.log(item);
    res.json(item)
})
.catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
    // console.log(err);

});
}
