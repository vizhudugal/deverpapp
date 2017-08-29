(function() {
  'use strict';
  var rangeflag="";
  var item="";
  var qualityid="";
  var quality_itemid="";
  var qualityid_get="";
Polymer({
  is: 'quality-testing-range',
  ready:function(){
    // alert("testing");
    this.rangehidden=1;
    this.valuehidden=1;
    this.rangeedit=1;
    this.btn1disable=false;
    this.btn2disable=false;
    this.okicon=true;
    this.inp1edit=true;
    this.inp2edit=true;
    this.deleteitem=true;
  },
  rangeflag1back:function(valuerangeresponse2){
    alert(JSON.stringify(valuerangeresponse2));
  },
//   rangeclick:function(){
//
// //   if(this.btn2disable=false)
// //   {
// // alert("btn2 false");
//     // document.getElementById("btn1").btn1disable = true;
//     this.btn1disable=true;
//     // this.btn2disable=false;
//
//   // }
// if(this.rangehidden=1)
// {
//   document.querySelector("quality-testing-item").rangehidden=0;
//   this.rangehidden=0;
// }
//
//   },
  // valueclick:function(){
  //   // if(this.btn1disable=false)
  //   // {
  //
  //
  //     // document.getElementById("btn2").btn2disable = true;
  //     this.btn2disable=true;
  //   // }
  //
  // if(this.valuehidden=1)
  // {
  //   document.querySelector("quality-testing-item").valuehidden=0;
  //   this.valuehidden=0;
  // }
  //
  // },
  updateicon:function(){
    this.okicon=false;
    this.inp1edit=false;
    this.inp2edit=false;
    this.deleteitem=false;
  },
  editicon:function(){
this.okicon=false;
  },
  savebtn:function(){

    var obj={
      "quality_parameter_id":this.qualityid,
      "minimum_value"       :this.minimumvalue,
      "maximum_value"       :this.maximumvalue
           };

    //  qualityid_get = sessionStorage.getItem('qualityid_storage');
    // obj.minimumvalue=this.minimumvalue;
    // obj.maximumvalue=this.maximumvalue;
    // // obj.rangeflag=this.rangeflag;
    // obj.qualityid_get=qualityid_get;
    this.updateparams=obj;
    alert(JSON.stringify(this.updateparams));
    this.$.updateid.generateRequest();
  },
  // editbtn:function(){
  //   alert("click");
  //   document.getElementById("savebtn").disabled = false;
  //   document.getElementById("inp1").disabled = false;
  //   document.getElementById("inp2").disabled = false;
  //   document.getElementById("inp3").disabled = false;
  // },
  updatecomplete:function(e){
    var updated=e.detail.response;
    alert(JSON.stringify(updated));
    this.deleteitem=true;
  },
  //backspace item display
FnSearchEnquiry:function(e)
{
  if(e.keyCode==13|| e.keyCode==40)
  this.querySelector('#transportinput2').focus();
  var arr=[];
  arr.push({"itemdes":"--Select--"});
  this.querySelector('#transportinput2').style.visibility='visible';
  if(e.keyCode==8)
      {
                    this.itemflag="true";
                    this.itemval="";
                    var len=(this.value).length;
                    if(len<=1)
                    {
                    this.querySelector('#transportinput2').style.visibility='hidden';
                    this.itemArray="";
                    this.itemval="";
                    }
                    if(len>1)
                    {
                    this.querySelector('#transportinput2').style.visibility='visible';
                    var backsubval=(((this.value).substring(0,(len-1))).trim()).toUpperCase();
                      for(var i=0;i<item.length;i++)
                      {
                          var subval=((item[i].range_flag).trim()).substring(0,backsubval.length);
                          if((item[i].range_flag).toUpperCase().indexOf((this.value).toUpperCase())!=-1)
                              {
                              var obj={"itemdes":""};;
                              obj.itemdes=item[i].range_flag;
                              obj.quality_parameter_id=item[i].quality_parameter_id;
                              // var obj1={"itemdes":obj.range_flag};

                              arr.push(obj);

                              }
                      }
                      this.itemArray=arr;
                    }
          }
  //while typing item display
if(e.keyCode!=8&& e.keyCode!=16&& e.keyCode!=13 && e.keyCode!=38&&e.keyCode!=40&&e.keyCode!=37&&e.keyCode!=39)
              {
                      if(this.itemflag=="true")
                     {
                      this.itemval = (this.value).toUpperCase()+String.fromCharCode((e.keyCode)).toUpperCase();
                      this.itemflag="false";
                      // alert(this.itemval);
                      // document.querySelector("quality-testing").checkfunction();
                      }
                      else
                      this.itemval = this.value +String.fromCharCode((e.keyCode));
                      // alert(this.itemval);

                      if(this.itemval.length>0)
                      {
                      for(var i=0;i<item.length;i++)
                      {
                      var subval=((item[i].range_flag).trim()).substring(0,this.itemval.length);
                    //   if(this.itemval!= subval)
                    //   {
                    //   alert("subval");
                    // }

                      if((item[i].range_flag).toUpperCase().indexOf((this.itemval).toUpperCase())!=-1)
                      {
                      var obj={"itemdes":""};
                      obj.itemdes=item[i].range_flag;
                      obj.quality_parameter_id=item[i].quality_parameter_id;
                      // alert(JSON.stringify(obj));

                      // alert("hi");
                            // var obj1={"itemdes":obj.range_flag};


                      arr.push(obj);
                      }

                      }
                      if(arr.length>0)
                      this.itemArray=arr;

                      else
                      {
                        // alert("else ok");
                        var obj={"itemdes":"No items found"};
                        obj.itemdes;
                        arr.push(obj);
                        this.itemArray=arr;
                        // if(this.itemArray=="" || this.itemArray==null){
                        //   alert("ok");
                        // }
                        // document.querySelector("quality-testing").checkfunction();
                      }
                      }
              }
            },
    FnSelectEnquiry1:function(e)
    {
      this.querySelector('#transportinput2').style.visibility='hidden';
      rangeflag = e.target.selectedItem.textContent.trim();
      qualityid = e.target.selectedItem.value.trim();
      // alert(rangeflag);
      sessionStorage.setItem("rangeflag_storage",rangeflag);
      sessionStorage.setItem("qualityid_storage",qualityid);
      this.itemArray=[];
      document.querySelector('#transportinput2').selected=-1;
      this.value=rangeflag;
    },
  rangeflagsave:function(){
  var qualityid_get = sessionStorage.getItem('qualityid_storage');
  var obj={};
  obj.qualityid_get=qualityid_get;
  obj.rangevalue=this.value;
  obj.quality_itemid=quality_itemid;
  this.rangeparams=obj;
  // alert(JSON.stringify(this.qualityparams));
  this.rangeurl="http://localhost:4000/Rangevaluesave";
  this.$.rangeid.generateRequest();
  },
  papercardclick:function(){
    // alert("clicking");
    sessionStorage.setItem('itemid',this.itemid);
    quality_itemid=sessionStorage.getItem('itemid');
    // document.querySelector("quality-testing-newfield").itemidvalueget(quality_itemid);
    // alert("tets"+quality_itemid);
  },
  rangecompletefunction:function(e)
  {
      var arr=e.detail.response.returnval;
      alert(JSON.stringify(arr));
  },
  selectrange:function(){
    var qualityid_get = sessionStorage.getItem('qualityid_storage');
    var obj={};
    obj.qualityid_get=qualityid_get;
    this.rangelistparams=obj;
    this.rangelisturl="http://localhost:4000/Rangevalueslist";
    this.$.rangelist.generateRequest();
  },
rangelistcomplete:function(e){
 item=e.detail.response.returnval;
  // alert(JSON.stringify(item));
  this.jsondata=item;
},
 deleteall:function(){
    // alert("hi");
    var datetime= new Date();
    var time=datetime.getTime();
    var obj={
      "quality_parameter_id":this.qualityid,
      "status":"inactive",
      "emp_id":"16",
      "deleted_date_time":datetime,
      "quality_strategy_id":"23",
      "minimum_value":this.minimumvalue,
      "maximum_value":this.maximumvalue,
      "unit_of_measure_id":this.unitofmeasureid
    };
    this.saverangeparams=obj;
    alert(JSON.stringify(this.saverangeparams));
    this.$.saverangeid.generateRequest();
  },
  saverangeresponse:function(e){
    var saverangeresponsearr=e.detail.response;
    alert(JSON.stringify(saverangeresponsearr));
    var obj={
      "quality_parameter_id":this.qualityid
    };
    this.deleterangeparams=obj;
    alert(JSON.stringify(this.deleterangeparams));
    this.$.deleterangeid.generateRequest();
  },
  deleterangeresponse:function(e){
    var deleterangeresponsearr=e.detail.response;
    alert(JSON.stringify(deleterangeresponsearr));
  },
  // deleteresponse:function(e){
  //   var deletearr=e.detail.response.returnval;
  //   alert(JSON.stringify(deletearr));
  //   document.querySelector("quality-testing-item").deleteremove();
  // },
  deleteremove:function(){
    var element = this.$.wholecard.querySelector("*");
    if (element) {
        element.parentNode.removeChild(element);
    }
  }


  });
})();
