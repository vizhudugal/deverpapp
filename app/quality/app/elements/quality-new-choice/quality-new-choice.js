(function() {
  'use strict';
   var arr1=[];
   var choicelist="";
Polymer({
  is: 'quality-new-choice',

ready:function(){
 // alert("hi");
},
// savingvalues:function(){
//   arr1.push({"choicelist":this.choicelist});
//  alert("savingvalues arr"+JSON.stringify(arr1))
// },
deletevalue:function(){
 var datetime= new Date();
 var time=datetime.getTime();
 var obj={
   "quality_parameter_id":this.qualityid,
   "status":"inactive",
   "emp_id":"16",
   "deleted_date_time":datetime,
   "quality_strategy_id":"23",
   "choicelist":this.choicelist
 };
 this.savemultipleparams=obj;
 // alert(JSON.stringify(this.savemultipleparams));
 this.$.savemultipleid.generateRequest();
},
savemultipleresponse:function(e){
 var saverangeresponsearr=e.detail.response;
 alert(JSON.stringify(saverangeresponsearr));
 var obj={
   "quality_parameter_id":this.qualityid
 };
 this.deletemultiplevalueparams=obj;
 alert(JSON.stringify(this.deletemultiplevalueparams));
 this.$.deletemultiplevalueid.generateRequest();
},
deletemultiplevalueresponse:function(e){
 var deleterangeresponsearr=e.detail.response;
 alert(JSON.stringify(deleterangeresponsearr));
 var element = this.$.remove.querySelector("*");
 if (element) {
     element.parentNode.removeChild(element);
 }
},
updatestatus:function(){
 // alert("remove");
     var obj=
     {
       "quality_parameter_id":this.qualityid
     };
      this.updatestatusparams=obj;
      alert(JSON.stringify(this.updatestatusparams));
      this.$.updatestatusid.generateRequest();
},
updatestatusresponse:function(e){
 var response=e.detail.response;
 alert(JSON.stringify(response));
}
// delete:function(){
//   var obj={
//     "choicelist":this.choicelist
//   };
//   this.deleteparams=obj;
//   this.$.deleteid.generateRequest();
// },
// deleteresponse:function(e){
//   var deletearr=e.detail.response;
//   alert(JSON.stringify(deletearr));
//   var element = this.$.deletediv.querySelector("*");
//   if (element) {
//       element.parentNode.removeChild(element);
//   }

//   // var x = document.getElementById('newelement').innerHTML;
//   // document.getElementById('newelement').innerHTML = x;
//
//
// }
//

  });
})();
