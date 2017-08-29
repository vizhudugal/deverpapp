var send_mail_p_o_dao=require('../dao/send_mail_p_o_dao.js');
exports.send_mail_p_o_contr_fn = function(req, res){
  send_mail_p_o_dao.send_mail_p_o_dao_fn([req.query],function(data){
  res.json({'returnval':data});
  });
};
