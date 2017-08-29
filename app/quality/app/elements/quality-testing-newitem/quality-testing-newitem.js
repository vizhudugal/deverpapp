(function() {
  'use strict';
  var itemidgenerate="";
  var qualitynamevalue="";
  var qualityidvalue="";
  var newitemobj={};
  var m_itemname="";
  var m_itemid="";
  var item="";
  var truevalue="";
  var falsevalue="";
  var itemfromexternal=null;
  var newitemlist;
  var autocompletearr=[];
  var itemresponse;
 var unitofmerasurearr=[];
 var unitofmeasureresponse;
 var strategyname="";
 var qualityidvalue="";
 var itemidvalue="";
 var unit_of_measure_id_get="";
 var multiple_value_array;
 var unit_of_arr=[];
Polymer({
  is: 'quality-testing-newitem',

    ready:function(){
      // alert("itemname");
      this.rangehide=1;
      this.valuehide=1;
      this.togglehide=1;
      this.saveidbtn=true;
      this.truevaluedisable=false;
      this.falsevaluedisable=false;
          },
          unit_param_fn:function(){
            // alert("qlty param fn");
              Polymer.Base.async(function () {
              var autocompleteunitSuggestions = document.querySelector('#unit_sugg_id');
              // alert(autocompletequalitySuggestions)
              // alert(autocompletequalitySuggestions.source)
              autocompleteunitSuggestions.source =unit_of_arr;
              // alert(JSON.stringify(autocompletequalitySuggestions.source));
            });
            // alert(JSON.stringify(this.autocompletequalityname));
            },
            unitofmeasureresponsefn:function(e){
              unitofmeasureresponse=e.detail.response;
              // // alert(JSON.stringify(unitofmeasureresponse))
              // this.originalArray=unitofmeasureresponse;
              // this.itemArray= unitofmeasureresponse;
              for (var i = 0; i < unitofmeasureresponse.length; i++) {
                unit_of_arr.push({text:unitofmeasureresponse[i].unit_of_measure_id,value:unitofmeasureresponse[i].unit_of_measure_name});
                // alert(JSON.stringify(quality_arr));
                unit_of_measure_id_get=this.selectedunitvalue.value;
              }

            },

// toggleShow:function(){
// var toggle = document.querySelector("paper-toggle-button");
// toggle.addEventListener('change', function () {
//   if (this.checked=="true") {
//   // alert(this.checked);
//   var itemobj1={};
// itemobj1.checkedvalue=this.checked;
// itemobj1.m_itemid=m_itemid;
// itemobj1.qualityidvalue=qualityidvalue;
// itemobj1.flagvalue="2";
// itemobj1.itemnamegetvalue=m_itemname;
// itemobj1.qualitynamevalue=qualitynamevalue;
// this.toggleparams=itemobj1;
// alert(JSON.stringify(this.toggleparams));
// this.toggleurl="http://localhost:4000/Togglesave";
// this.$.toggleajax.generateRequest();
//
//   } else {
//   var itemobj={};
//   itemobj.checkedvalue=this.checked;
//   itemobj.itemidgenerate=m_itemid;
//   itemobj.qualityidvalue=qualityidvalue;
//   itemobj.flagvalue="2";
//   itemobj.itemnamegetvalue=m_itemname;
//   itemobj.qualitynamevalue=qualitynamevalue;
//   this.toggle1params=itemobj;
//   alert(JSON.stringify(this.toggle1params));
//   this.toggle1url="http://localhost:4000/Togglesave1";
//   this.$.toggle1ajax.generateRequest();
//
//   }
// });
// },
truevalueFn:function(){
  this.falsevaluedisable=true;
if(this.trueget=="on"){
  this.trueget="pass";
  truevalue=this.trueget;
  document.querySelector("quality-param-new-strat-item").truevalueback();
 //  var itemobj1={};
 // itemobj1.checkedvalue=truevalue;
 // itemobj1.m_itemid=m_itemid;
 // itemobj1.qualityidvalue=qualityidvalue;
 // itemobj1.flagvalue="2";
 // itemobj1.itemnamegetvalue=m_itemname;
 // itemobj1.qualitynamevalue=qualitynamevalue;
 // this.toggleparams=itemobj1;
 // alert(JSON.stringify(this.toggleparams));
 // this.toggleurl="http://localhost:4000/Togglesave";
 // this.$.toggleajax.generateRequest();
}
},
falsevalueFn:function(){
  this.truevaluedisable=true;
  // if(this.falseget="" ||m_itemid="" ||qualityidvalue=""||m_itemname=""|| qualitynamevalue=""||itemobj="" ){
  //   this.errortoggle="Required Data!"
  // }else{
  if(this.falseget=="on"){
  this.falseget="fail";
  falsevalue=this.falseget;
  document.querySelector("quality-param-new-strat-item").falsevalueback();
    // var itemobj={};
    // itemobj.checkedvalue=falsevalue;
    // itemobj.itemidgenerate=m_itemid;
    // itemobj.qualityidvalue=qualityidvalue;
    // itemobj.flagvalue="2";
    // itemobj.itemnamegetvalue=m_itemname;
    // itemobj.qualitynamevalue=qualitynamevalue;
    // this.toggle1params=itemobj;
    // alert(JSON.stringify(this.toggle1params));
    // this.toggle1url="http://localhost:4000/Togglesave1";
    // this.$.toggle1ajax.generateRequest();
  }
},
// toggleresponse:function(e){
//   var toggleresponse=e.detail.response.returnval;
//   alert(JSON.stringify(toggleresponse));
//   document.querySelector("quality-testing-process").refreshall(qualityidvalue);
// },
// toggle1response:function(e){
//   var toggleresponse=e.detail.response.returnval;
//   alert(JSON.stringify(toggleresponse));
//   document.querySelector("quality-testing-process").refreshall(qualityidvalue);
// },

  // checkid:function(data){
  //
  //   alert("ITEM number:"+data);
  //   itemidgenerate=data;
  // },
  valueclick:function(){
    // alert("value");
      this.valuehide=0;
      this.rangehide=1;
      this.togglehide=1;
  },
  rangeclick:function(){
    // alert("range");
      this.rangehide=0;
      this.valuehide=1;
      this.togglehide=1;
  },
  toggleclick:function(){
    // alert("toggle");
    this.rangehide=1;
    this.valuehide=1;
    this.togglehide=0;
  },
  savevalue:function(){
    // alert("1st work");
    document.querySelector("quality-param-new-strat-item").savegetvalue();
  },
  saverange:function(){
    // var element=document.createElement("quality-param-new-strat");
    // document.body.append(element);
    document.querySelector("quality-param-new-strat-item").savegetrange();
  },
  savepostvalues:function(strategynamevalue,qualityparamvalue,itemnamevalue){
    strategyname=strategynamevalue;
    qualityidvalue=qualityparamvalue;
    itemidvalue=itemnamevalue;
    // alert("3"+strategyname);
    alert(qualityidvalue);
    alert(itemidvalue);
    document.querySelector("quality-range-add").valueget();
  },
  truevaluebackpost:function(strategynamevalue,qualityparamvalue,itemnamevalue){
    strategyname=strategynamevalue;
    qualityidvalue=qualityparamvalue;
    itemidvalue=itemnamevalue;
    var obj={
       "quality_strat_name":strategyname
         };
     this.createstratparams=obj;
     alert(JSON.stringify(this.createstratparams));
     this.$.createstratid.generateRequest();
  },
  falsevaluebackpost:function(strategynamevalue,qualityparamvalue,itemnamevalue){
    strategyname=strategynamevalue;
    qualityidvalue=qualityparamvalue;
    itemidvalue=itemnamevalue;
    var obj={
       "quality_strat_name":strategyname
         };
         this.createstratparams=obj;
         alert(JSON.stringify(this.createstratparams));
         this.$.createstratid.generateRequest();
  },
  getvalueaddedpost:function(multiple_value_arr){
    alert("getpostvalues"+JSON.stringify(multiple_value_arr));
    multiple_value_array=multiple_value_arr;

    // alert(strategyname);
    // alert(qualityidvalue);
    // alert(itemidvalue);
    var obj={
       "quality_strat_name":strategyname
           };
     this.createstratparams=obj;
     alert("start params "+JSON.stringify(this.createstratparams));
     this.$.createstratid.generateRequest();
  },
savepostrange:function(strategynamevalue,qualityparamvalue,itemnamevalue){
     strategyname=strategynamevalue;
     qualityidvalue=qualityparamvalue;
     itemidvalue=itemnamevalue;
    var obj={
       "quality_strat_name":strategyname
           };
     this.createstratparams=obj;
     alert(JSON.stringify(this.createstratparams));
     this.$.createstratid.generateRequest();
  },
  saveinspectionresponse:function(e){
    var inspectionresponse=e.detail.response;
    alert(JSON.stringify(inspectionresponse));
    var obj={
      "quality_strat_name":strategyname
    };
    this.fetchstratparams=obj;
    alert(JSON.stringify(this.fetchstratparams));
    this.$.fetchstratid.generateRequest();
  },
  fetchinspectionresponse:function(e){
    var fetchinspectionres=e.detail.response;
    alert("fetch response"+JSON.stringify(fetchinspectionres));

   for(var i=0;i<=fetchinspectionres.length;i++)
    {
        if(this.minimumvalue!=""|| this.maximumvalue!=""){
              var obj={
                    "quality_strat_id":fetchinspectionres[i].quality_strat_id,
                    "quality_parameter_id":qualityidvalue,
                    "minimum_value":this.minimumvalue,
                    "maximum_value":this.maximumvalue,
                    "unit_of_measure_id":unit_of_measure_id_get
                  };
                this.saverangeparams=obj;
                alert("final params"+JSON.stringify(this.saverangeparams));
                this.$.saverangeid.generateRequest();
        }
      if(multiple_value_array!=""){
          for(var i=0;i<=multiple_value_array.length;i++){
            var obj={
                  "quality_strat_id":fetchinspectionres[i].quality_strat_id,
                  "quality_parameter_id":qualityidvalue,
                  "multiple_value":multiple_value_array[i].multiple_value
                   };
              this.savemultipleparams=obj;
              alert("final params"+JSON.stringify(this.savemultipleparams));
              this.$.savemultipleid.generateRequest();
          }
        }
      if(truevalue!=""){
        var obj={
              "quality_strat_id":fetchinspectionres[i].quality_strat_id,
              "quality_parameter_id":qualityidvalue,
              "multiple_value":truevalue,
              "multiple_value_status":"active"
               };
          this.savemultipleparams=obj;
          alert("final params"+JSON.stringify(this.savemultipleparams));
          this.$.savemultipleid.generateRequest();
      }
      if(falsevalue!=""){
        var obj={
              "quality_strat_id":fetchinspectionres[i].quality_strat_id,
              "quality_parameter_id":qualityidvalue,
              "multiple_value":falsevalue,
              "multiple_value_status":"active"
               };
          this.savemultipleparams=obj;
          alert("final params"+JSON.stringify(this.savemultipleparams));
          this.$.savemultipleid.generateRequest();
      }
      }
    },
savemultipleresponse:function(e){
  var savemultipleresarr=e.detail.response;
  alert("final op"+JSON.stringify(savemultipleresarr));
  document.querySelector("quality-param-new-strat").newparameteradd();
},
  saverangeresponse:function(e){
    var saverangeresponsearr=e.detail.response;
    alert("final op"+JSON.stringify(saverangeresponsearr));
    document.querySelector("quality-param-new-strat").newparameteradd();
  },
  savechoicepost:function(arr1){
    // alert("new 2");
  document.querySelector("quality-param-new-strat-item").savegetvalue();
  },
  // savebtn:function(){
  //     document.querySelector("quality-range-add").saveallbacknewitem(m_itemid,m_itemname,qualityidvalue,qualitynamevalue);
  // },
  remove: function () {
   //  alert("removed");
        var element = this.$.attachdiv.querySelector("*");
        if (element) {
            element.parentNode.removeChild(element);
        }
    },
      qualitynameget:function(qualityname_getvalue)
      {
      qualitynamevalue=qualityname_getvalue;
      },

   _loadElement1:function(){
             this.myLoadElement("quality-range-add");
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
         },
  valueresponse:function(e){
      var arr=e.detail.response.returnval;
      alert(JSON.stringify(arr));
      document.querySelector("quality-testing-process").refreshall(qualityidvalue);
      // document.querySelector("quality-testing-process").refreshall();
    },
qualityidtestback:function(qualityparamid){
   qualityidvalue=qualityparamid;
},
newitemslistfromqualitytesting:function(itemlist){
newitemlist=itemlist;
  // alert("new fom test"+JSON.stringify(newitemlist));
  this.itemautocomplete();
},
itemnamefromtestingprocess:function(itemnamenew){
  // alert("new fom test"+JSON.stringify(itemnamenew));
  itemfromexternal=itemnamenew;
    this.itemautocomplete();
},
// itemnamefn:function(){
//      Polymer.Base.async(function () {
//       //  alert("cust"+JSON.stringify(customer));
//        var autocompleteSuggestionsloc = document.querySelector('#itemid_autocomplete');
//        autocompleteSuggestionsloc.source = autocompletearr;
//    })
//  },
 // unitofmeasurefn:function(){
 //   Polymer.Base.async(function () {
 //    //  alert("cust"+JSON.stringify(customer));
 //     var autocompleteSuggestionsloc = document.querySelector('#unitofmeasure_complete');
 //     autocompleteSuggestionsloc.source = unitofmerasurearr;
 // })
 // },
  // itemautocomplete:function(e)
  //   {
  //     itemresponse=e.detail.response;
  //     alert(JSON.stringify(itemresponse));
  //     for(var i=0;i<=itemresponse.length;i++)
  //     {
  //       autocompletearr.push({"text":itemresponse[i].item_name,"value":itemresponse[i].item_id});
  //     }
  //   },
  // **********unit of measure auto complete*********
  // input_unit_click:function()
  //   { //alert('clicked');
  //        this.querySelector('#unitlistid').style.visibility='visible';
  //           if(this.dataNotFoundFlag==1)
  //            {
  //                this.dataNotFoundFlag=0;
  //                this.itemArray="";
  //                this.itemArray=this.originalArray;
  //                this.querySelector('#unitlistid').style.visibility='visible';
  //            }
  //    },
  //    FnListunitSelect:function(e)
  //    {
  //        this.unit_of_measure_name = e.target.selectedItem.textContent.trim();
  //        this.unit_of_measure_id = e.target.selectedItem.value.trim();
  //        //  alert("Select....."+this.unit_of_measure_name+"    "+this.item_id);
  //       sessionStorage.setItem("unit_of_measure_name_storage",this.unit_of_measure_name);
  //       sessionStorage.setItem("unit_of_measure_id_storage",this.unit_of_measure_id);
  //       unit_of_measure_id_get = sessionStorage.getItem('unit_of_measure_id_storage');
  //       // alert(unit_of_measure_id_get);
  //       this.unittextvalue=this.unit_of_measure_name;
  //       this.querySelector('#unitlistid').style.visibility='hidden';
  //       document.querySelector('#unitlistid').selected=-1;
  //   //This is to get the sales order details from the given customer
  //     },
  //    FnitemFilter : function(key,stringSearch,arrayValue)
  //    {
  //     //  alert("Key"+key+"    SEarch"+stringSearch+" length"+arrayValue.length);
  //      var arr=[];
  //      var flag=0;
  //      for(var i=0;i<arrayValue.length;i++)
  //      {
  //       //  console.log("value  "+arrayValue[i].item_name);
  //          if((arrayValue[i].item_name).toUpperCase().indexOf((stringSearch).toUpperCase())!=-1)
  //           //if((arrayValue[i].item_name).startsWith(stringSearch))
  //          {
  //            var filteredObjectArray={"item_name":arrayValue[i].item_name,"item_id":arrayValue[i].item_id}
  //            arr.push(filteredObjectArray);
  //          }
  //      }
  //      if (arr.length==0)
  //      {
  //            flag=1;
  //            var filteredObjectArray={"item_name":"NO DATA found!","item_id":""}
  //            arr.push(filteredObjectArray);
  //           //  document.querySelector('quality-testing').newid();
  //      }
  //      //alert(" Filtered Arry "+JSON.stringify(arr));
  //      arrayValue=arr;
  //      return {"resArray":arrayValue,"resFlag":flag};
  //      },
  //    FnSearchunit:function(e){
  //      var keyValue=e.keyCode;
  //      var searchString;
  //      this.itemArray=this.originalArray;
  //      switch(e.keyCode){
  //        case 8: {
  //                  if(this.searchString.length>0){
  //                    this.searchString=(((this.searchString).substring(0,(this.searchString.length-1))).trim()).toUpperCase();
  //                    break;
  //                  }
  //                }
  //        case 9:{
  //                  this.searchString=(this.unittextvalue).toUpperCase();
  //                  this.querySelector('#unitlistid').focus();
  //                  break;
  //                }
  //       case 13:{
  //                  this.searchString=(this.unittextvalue).toUpperCase();
  //                  break;
  //                }
  //        case 37:{
  //                  this.searchString=(this.unittextvalue).toUpperCase();
  //                  this.querySelector('#unitlistid').focus();
  //                  break;
  //                }
  //        case 38:{
  //                  this.searchString=(this.unittextvalue).toUpperCase();
  //                  this.querySelector('#unitlistid').focus();
  //                  break;
  //                }
  //        case 39:{
  //                  this.searchString=(this.unittextvalue).toUpperCase();
  //                  this.querySelector('#unitlistid').focus();
  //                  break;
  //                }
  //        case 40:{
  //                  this.searchString=(this.unittextvalue).toUpperCase();
  //                  this.querySelector('#unitlistid').focus();
  //                  break;
  //                }
  //        default: {
  //                  this.searchString=this.unittextvalue+String.fromCharCode(e.keyCode).trim().toUpperCase();
  //                }
  //      }
  //      var resultValue= this.FnitemFilter(keyValue,this.searchString,this.itemArray);
  //      this.itemArray=resultValue.resArray;
  //      this.dataNotFoundFlag=resultValue.resFlag;
  //    }
});
})();
