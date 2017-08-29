(function() {
  'use strict';
  var response={};
  var responsevalue=[];
  var empidget;
Polymer({
  is: 'quality-security-rejected-tableview-icons',
  ready:function(){
  // alert("table view icons");
  this.checkdisable=false;
  this.closedisable=false;
},
check:function(){
  this.closedisable=true;
 empidget = sessionStorage.getItem('empid');
  response={"itemid":this.itemid,"supplierid":this.supplierid,"inwardnumber":this.inwardnumber,"containerquantity":this.containerquantity,"itemquantity":this.itemquantity,"remarks":this.remarks,"containerid":this.containerid,"quantityid":this.quantityid,"status":"QA accepted","empid":empidget,"reasonid":this.reasonid};
  responsevalue.push(response);
  this.closecolor="grey";
  this.checkcolor="#A2CD6F";
},
close:function(){
  this.checkdisable=true;
  response={"itemid":this.itemid,"supplierid":this.supplierid,"inwardnumber":this.inwardnumber,"containerquantity":this.containerquantity,"itemquantity":this.itemquantity,"remarks":this.remarks,"containerid":this.containerid,"quantityid":this.quantityid,"status":"QA rejected","empid":empidget,"reasonid":this.reasonid};
  responsevalue.push(response);
  this.checkcolor="grey";
  this.closecolor="red";
},
respond:function(){
  // alert("respond");
for(var i=0;i<responsevalue.length;i++){
  this.responseparam=responsevalue[i];
  this.$.responseid.generateRequest();
}

},
handleResponse:function(e){
alert(e.detail.response.returnval);
document.querySelector("home-page").FnSetPage("quality-security-rejected");
}

});
})();
