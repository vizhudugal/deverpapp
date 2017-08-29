var sender_mail_add = require('../config/sender_mail_address.json');
exports.send_mail_p_o_dao_fn=function(data,callback) {
  // console.log("sender_mail_add"+sender_mail_add);
  console.log(data);
  var send = require('gmail-send')({
    user: sender_mail_add[0].mail_address,
    pass: sender_mail_add[0].password,
    to:   data[0].suppier_email_id,
    text:    'Purchase Order'
  });
  var file = 'D:/erpapp-source-tree/erpapp/app/procurement/app/purchase_order/pdf files/'+data[0].po_number+'_Purchaseorder.pdf';        // File to attach

  // Override any default option and send email
  send({
    subject: 'Purchase Order po number:'+data[0].po_number,   // Override value set as default
    files: [file]                // String or array of strings of filenames to attach
  }, function (err, res) {
    console.log('* [example1] send(): err:', err, '; res:', res);
      return callback({"error":err,"resposne":res});

  });
}
