(function() {
  'use strict';
  var quality_itemid="";
  var i = 0;
  var item="";
  var itemid_select="";
  var rangeflagvalue_select="";
  var quality_itemid="";
  var valuerangeresponse1="";
  var array3=[];
Polymer({
  is: 'quality-testing-choice-value',
  ready:function(){
    // alert("range");
    this.saveactive=true;
    this.editrangediv=1;
    this.rangevalueshide=0;
    this.newelementid=1;
    this.deleteitem=true;
  },
  rangelist:function(qualitymultiplevaluearr){
    alert(JSON.stringify(qualitymultiplevaluearr));
    this.jsondatarangevalues1=qualitymultiplevaluearr;
  },
  deleteall:function(){
    // var datetime= new Date();
    // var time=datetime.getTime();
    // var obj={
    //   "quality_parameter_id":this.qualityid,
    //   "status":"inactive",
    //   "emp_id":"16",
    //   "deleted_date_time":datetime,
    //   "quality_strategy_id":"23",
    //   "minimum_value":this.minimumvalue,
    //   "maximum_value":this.maximumvalue,
    //   "unit_of_measure_id":this.unitofmeasureid
    // };
    // this.savemultipleparams=obj;
    // // alert(JSON.stringify(this.savemultipleparams));
    // this.$.savemultipleid.generateRequest();
  },
  savemultipleresponse:function(e){
    var saverangeresponsearr=e.detail.response;
    // alert(JSON.stringify(saverangeresponsearr));
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
    var element = this.$.deletediv.querySelector("*");
    if (element) {
        element.parentNode.removeChild(element);
    }

  },
//     deleteresponse:function(e){
//       var deletearr=e.detail.response.returnval;
//       alert(JSON.stringify(deletearr));
//       document.querySelector("quality-rangevalue").deleteremove();
//
//     },
//     deleteremove:function(){
//       var element = this.$.wholecard.querySelector("*");
//       if (element) {
//           element.parentNode.removeChild(element);
//       }
//     },
//     rangeflag1back:function(valuerangeresponse2){
//       valuerangeresponse1=valuerangeresponse2;
//       // alert("working");
//       // alert("rangeflag"+JSON.stringify(valuerangeresponse1));
//       this.flagfromtesting=[{}];
//       this.jsondatarangevalues1=valuerangeresponse1;
//       for(var i=0;i<valuerangeresponse1.length;i++)
//         {
//           var item_id=valuerangeresponse1[i].item_id;
//           var item_name=valuerangeresponse1[i].item_name;
//           // alert(item_id);
//           // alert(item_name);
//           this.itemname=item_name;
//           this.itemid=item_id;
//         }
// //     array3.push(valuerangeresponse1);
// // alert("Array"+JSON.stringify(array3));
//     },
//     // this.jsondatarangevalues1=valuerangeresponse1;
//     // for(var i=0;i<valuerangeresponse1.length;i++)
//     // {
//     //   var item_id=valuerangeresponse1[i].item_id;
//     //   var item_name=valuerangeresponse1[i].item_name;
//     //   // alert(item_id);
//     //   // alert(item_name);
//     //   this.itemname=item_name;
//     //   this.itemid=item_id;
//     // }
//     // rangetemplate:function(valuerangeresponse1){
//     //   this.jsondatarangevalues1=valuerangeresponse1;
//     // },
//     rangevaluecard:function(){
//       sessionStorage.setItem('itemid',this.itemid);
//       quality_itemid=sessionStorage.getItem('itemid');
//       // alert(quality_itemid);
//       document.querySelector("quality-testing-newfield").itemidvalueget(quality_itemid);
//     },
//     // addflagfield:function(){
//     //    document.querySelector("quality-testing-newfield").find();
//     // },
  saveall:function(){
    // alert("clicking");
   document.querySelector("quality-testing-newfield").saveallback();
  },
  // _loadElement1:function(){
  //       this.saveactive=false;
  //       this.deleteitem=false;
  //       this._myLoadElement("quality-testing-newfield");
  //       },
  //       _myLoadElement: function(elementName, htmlImport) {
  //            this.importHref(htmlImport, function (e) {
  //            var myElement = document.createElement(elementName);
  //           //  this.$.attachdiv.appendChild(myElement);
  //           document.getElementById("attachdiv").appendChild(myElement);
  //            myElement.myProperty = "anything";
  //        });
  //    },
  _loadElement1:function(){
          this.saveactive=false;
          this.deleteitem=false;
          this.myLoadElement("quality-testing-newfield");
     },
     myLoadElement: function(elementName) {
          var myElement = document.createElement(elementName);
          document.getElementById("attachdiv").appendChild(myElement);
           myElement.myProperty = "anything";
  },


   _removeElement: function () {
    //  alert("removed");
         var element = this.$.attachdiv.querySelector("*");
         if (element) {
             element.parentNode.removeChild(element);
         }
     }
//       rangecreate:function(){
//         // alert(quality_itemid);
//         var obj={};
//         obj.quality_itemid=quality_itemid;
//         this.rangeflagsaveparams=obj;
//         // alert(JSON.stringify(this.rangeflagsaveparams));
//         this.rangeflagsaveurl="http://localhost:4000/rangeflagvalueautocomplete";
//         this.$.rangeflagsaveid.generateRequest();
//       },
//
//       rangeflagsaveresponse:function(e){
//          item=e.detail.response.returnval;
//         // alert(JSON.stringify(item));
//       },
//       FnSearchEnquiry:function(e)
//       {
//         if(e.keyCode==13|| e.keyCode==40)
//         this.querySelector('#transportinput2').focus();
//         var arr=[];
//         arr.push({"itemdes":"-----Select-----"});
//         this.querySelector('#transportinput2').style.visibility='visible';
//         if(e.keyCode==8)
//             {
//                           this.itemflag="true";
//                           this.itemval="";
//                           var len=(this.value).length;
//                           if(len<=1)
//                           {
//                           this.querySelector('#transportinput2').style.visibility='hidden';
//                           this.itemArray="";
//                           this.itemval="";
//                           }
//                           if(len>1)
//                           {
//                           this.querySelector('#transportinput2').style.visibility='visible';
//                           var backsubval=(((this.value).substring(0,(len-1))).trim()).toUpperCase();
//                             for(var i=0;i<item.length;i++)
//                             {
//                                 var subval=((item[i].range_flag_value).trim()).substring(0,backsubval.length);
//                                 if((item[i].range_flag_value).toUpperCase().indexOf((this.value).toUpperCase())!=-1)
//                                     {
//                                     var obj={"itemdes":""};;
//                                     obj.itemdes=item[i].range_flag_value;
//                                     obj.item_id=item[i].item_id;
//                                     // var obj1={"itemdes":obj.range_flag_value};
//
//                                     arr.push(obj);
//
//                                     }
//                             }
//                             this.itemArray=arr;
//                           }
//                 }
//         //while typing item display
//       if(e.keyCode!=8&& e.keyCode!=16&& e.keyCode!=13 && e.keyCode!=38&&e.keyCode!=40&&e.keyCode!=37&&e.keyCode!=39)
//                     {
//                             if(this.itemflag=="true")
//                            {
//                             this.itemval = (this.value).toUpperCase()+String.fromCharCode((e.keyCode)).toUpperCase();
//                             this.itemflag="false";
//                             // alert(this.itemval);
//                             // document.querySelector("quality-testing").checkfunction();
//                             }
//                             else
//                             this.itemval = this.value +String.fromCharCode((e.keyCode));
//                             // alert(this.itemval);
//
//                             if(this.itemval.length>0)
//                             {
//                             for(var i=0;i<item.length;i++)
//                             {
//                             var subval=((item[i].range_flag_value).trim()).substring(0,this.itemval.length);
//                           //   if(this.itemval!= subval)
//                           //   {
//                           //   alert("subval");
//                           // }
//
//                             if((item[i].range_flag_value).toUpperCase().indexOf((this.itemval).toUpperCase())!=-1)
//                             {
//                             var obj={"itemdes":""};
//                             obj.itemdes=item[i].range_flag_value;
//                             obj.item_id=item[i].item_id;
//                             // alert(JSON.stringify(obj));
//
//                             // alert("hi");
//                                   // var obj1={"itemdes":obj.range_flag_value};
//
//
//                             arr.push(obj);
//                             }
//
//                             }
//                             if(arr.length>0)
//                             this.itemArray=arr;
//
//                             else
//                             {
//                               // alert("else ok");
//                               var obj={"itemdes":"No items found"};
//                               obj.itemdes;
//                               arr.push(obj);
//                               this.itemArray=arr;
//                               // if(this.itemArray=="" || this.itemArray==null){
//                               //   alert("ok");
//                               // }
//                               // document.querySelector("quality-testing").checkfunction();
//                             }
//                             }
//                     }
//       },
//       FnSelectEnquiry1:function(e)
//       {
//         this.querySelector('#transportinput2').style.visibility='hidden';
//         rangeflagvalue_select = e.target.selectedItem.textContent.trim();
//         itemid_select = e.target.selectedItem.value.trim();
//         sessionStorage.setItem("rangeflagvalue_set",rangeflagvalue_select);
//         // alert(rangeflagvalue_select);
//         this.itemArray=[];
//         document.querySelector('#transportinput2').selected=-1;
//         this.value=rangeflagvalue_select;
//       }




  });
})();
