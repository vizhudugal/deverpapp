var bookshelf = require('./database.js');

var purchase_request_extended_model = bookshelf.Model.extend({
  tableName: 'od_purchase_request_external'
});
module.exports = bookshelf.model('purchase_request_extended_model', purchase_request_extended_model);

var item_details_extended_model = bookshelf.Model.extend({
  tableName: 'md_procurement_item_detail'
});
module.exports = bookshelf.model('item_details_extended_model', item_details_extended_model);

var req_itemtype_dept_map_extended_model = bookshelf.Model.extend({
  tableName: 'md_procurement_requisition_itemtype_department_mapping'
});
module.exports = bookshelf.model('req_itemtype_dept_map_extended_model', req_itemtype_dept_map_extended_model);

var hr_dept_extended_model = bookshelf.Model.extend({
  tableName: 'md_hr_department_detail'
});
module.exports = bookshelf.model('hr_dept_extended_model', hr_dept_extended_model);

var hr_emp_role_extended_model = bookshelf.Model.extend({
  tableName: 'od_hr_employee_role'
});
module.exports = bookshelf.model('hr_emp_role_extended_model', hr_emp_role_extended_model);

var item_supplier_map_extended_model = bookshelf.Model.extend({
  tableName: 'od_procurement_item_supplier_mapping'
});
module.exports = bookshelf.model('item_supplier_map_extended_model', item_supplier_map_extended_model);

var supplier_extended_model = bookshelf.Model.extend({
  tableName: 'md_procurement_supplier_detail'
});
module.exports = bookshelf.model('supplier_extended_model', supplier_extended_model);

var item_container_details_extended_model = bookshelf.Model.extend({
  tableName: 'md_item_container_name_detail'
});
module.exports = bookshelf.model('item_container_details_extended_model', item_container_details_extended_model);
