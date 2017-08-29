var autoid;
var iid;
var item1;
var autoc_item_name="";
var autoc_item_id="";
var itemtypeid;
var containerid;
var warehouselocation;
var auto_sup_arr=[];
Polymer({
  is: "purchase-request-process",
  ready: function() {
    auto_sup_arr=[];
  },
  searchWHLocation:function(){
    document.querySelector("purchase-request-process-ironajax").searchlocation(this.itemname);
  },
  purchase_requestlabel:function(purchase_requestlabel){
    this.typelabel=purchase_requestlabel[0].itemtype;
    this.namelabel=purchase_requestlabel[0].itemname;
    this.spec1label=purchase_requestlabel[0].itemspecification1;
    this.whloclabel=purchase_requestlabel[0].warehouselocation;
    this.containerlabel=purchase_requestlabel[0].itemcontainer;
    this.containerquantitylabel=purchase_requestlabel[0].itemcontainerquantity;
    this.itemquantitylabel=purchase_requestlabel[0].itemquantity;
  },
  savepurchase_request:function(){
    var json={};
    json.purchase_requestid=autoid;
    json.iid=iid;
    json.selectedtype=itemtypeid;
    json.supplier_name=this.value2;
    json.itemspec1=this.itemspec1;
    json.whlocation=warehouselocation;
    json.selectedcontainer=containerid;
    json.itemcontainerquantity=this.itemcontainerquantity;
    json.itemquantity=this.itemquantity;
    json.purchase_requestdate=this.purchase_requestdate;
    json.requireddate=this.min;
    json.created_by="created_by";
    json.updated_by="updated_by";
    document.querySelector('purchase-request-process-ironajax').savedata(json);
  },
  searchitem:function(){
    alert(JSON.stringify(this.selectedvalueitemid.value));
    document.querySelector('purchase-request-process-ironajax').searchitem(this.selectedvalueitemid.value);
  },
  itemdata:function(e){
    itemtypeid=e[0].item_type_id;
    containerid=e[0].container_type_id;
    warehouselocation=e[0].warehouse_stores_id;
    iid=e[0].item_id;
    this.itype=e[0].item_type_name;
    this.itemspec1=e[0].item_specification1;
    this.whlocation=e[0].warehouse_stores_name;
    this.icontainer=e[0].container_name;
    var sup_auto_Data=e;
    for (var i = 0; i < sup_auto_Data.length; i++) {
      auto_sup_arr.push({text:sup_auto_Data[i].supplier_name,value:sup_auto_Data[i].item_id});
    }
    // alert(this.itype+" "+this.itemspec1+" "+this.whlocation+" "+this.icontainer)
  },
  checkid:function(x){
    autoid=x;
  },
  //autocomplete***********
  FnSearchEnquiry1:function(e){
    item1=this.tempitemname1;
      if(e.keyCode==13|| e.keyCode==40)
      this.querySelector('#transportinput3').focus();
      var arr=[];
      if(e.keyCode==8){
        this.itemflag1="true";
        this.itemval1="";
        var len=(this.value1).length;
        if(len<=1){
          this.querySelector('#transportinput3').style.visibility='hidden';
          this.itemArray1="";
          this.itemval1="";
        }
        if(len>1){
          this.querySelector('#transportinput3').style.visibility='visible';
          var backsubval=(((this.value1).substring(0,(len-1))).trim()).toUpperCase();
          for(var i=0;i<item1.length;i++)
          {
            var subval=((item1[i].item_name).trim()).substring(0,backsubval.length);
            if((item1[i].item_name).toUpperCase().indexOf((this.value1).toUpperCase())!=-1)
            {
              var obj1={"itemdes1":"","enquiry_no":""};
              obj1.itemdes1=item1[i].item_name;
              obj1.item_id=item1[i].item_id;
              arr.push(obj1);
            }
          }
          this.itemArray1=arr;
        }
      }
      if(e.keyCode!=8&& e.keyCode!=16&& e.keyCode!=13 && e.keyCode!=38&&e.keyCode!=40&&e.keyCode!=37&&e.keyCode!=39){
        if(this.itemflag1=="true") {
          this.itemval1 = (this.value1).toUpperCase()+String.fromCharCode((e.keyCode)).toUpperCase();
          this.itemflag1="false";
        }
        else
        this.itemval1 = this.value1 +String.fromCharCode((e.keyCode));
        if(this.itemval1.length>0)
        {
          for(var i=0;i<item1.length;i++)
          {
            var subval=((item1[i].item_name).trim()).substring(0,this.itemval1.length);
            if((item1[i].item_name).toUpperCase().indexOf((this.itemval1).toUpperCase())!=-1)
            {
              var obj1={"itemdes1":"","enquiry_no":""};
              obj1.itemdes1=item1[i].item_name;
              obj1.item_id=item1[i].item_id;
              arr.push(obj1);
            }
          }
          if(arr.length>0)
            this.itemArray1=arr;
          else
          {
            var obj1={"itemdes1":"","enquiry_no":""};
            obj.itemdes1="No items found";
            arr.push(obj1);
            this.itemArray1=arr;
          }
        }
      }
      },
      FnSelectEnquiry2:function(e){
      this.querySelector('#transportinput3').style.visibility='hidden';
      autoc_item_name = e.target.selectedItem.textContent.trim();
      autoc_item_id = e.target.selectedItem.value.trim();
      this.itemArray1=[];
      document.querySelector('#transportinput3').selected=-1;
      this.value1=autoc_item_name;
    },
    FnSearchEnquiry2:function(e){
      item1=this.tempitemname1;
        if(e.keyCode==13|| e.keyCode==40)
        this.querySelector('#transportinput4').focus();
        var arr=[];
        if(e.keyCode==8){
          this.itemflag1="true";
          this.itemval1="";
          var len=(this.value2).length;
          if(len<=1){
            this.querySelector('#transportinput4').style.visibility='hidden';
            this.supplierArray="";
            this.itemval1="";
          }
          if(len>1){
            this.querySelector('#transportinput4').style.visibility='visible';
            var backsubval=(((this.value2).substring(0,(len-1))).trim()).toUpperCase();
            for(var i=0;i<item1.length;i++)
            {
              var subval=((item1[i].supplier_name).trim()).substring(0,backsubval.length);
              if((item1[i].supplier_name).toUpperCase().indexOf((this.value2).toUpperCase())!=-1)
              {
                var obj1={"itemdes1":"","enquiry_no":""};
                obj1.itemdes1=item1[i].supplier_name;
                obj1.item_id=item1[i].item_id;
                arr.push(obj1);
              }
            }
            this.supplierArray=arr;
          }
        }
        if(e.keyCode!=8&& e.keyCode!=16&& e.keyCode!=13 && e.keyCode!=38&&e.keyCode!=40&&e.keyCode!=37&&e.keyCode!=39){
          if(this.itemflag1=="true") {
            this.itemval1 = (this.value2).toUpperCase()+String.fromCharCode((e.keyCode)).toUpperCase();
            this.itemflag1="false";
          }
          else
          this.itemval1 = this.value2 +String.fromCharCode((e.keyCode));
          if(this.itemval1.length>0)
          {
            for(var i=0;i<item1.length;i++)
            {
              var subval=((item1[i].supplier_name).trim()).substring(0,this.itemval1.length);
              if((item1[i].supplier_name).toUpperCase().indexOf((this.itemval1).toUpperCase())!=-1)
              {
                var obj1={"itemdes1":"","enquiry_no":""};
                obj1.itemdes1=item1[i].supplier_name;
                obj1.item_id=item1[i].item_id;
                arr.push(obj1);
              }
            }
            if(arr.length>0)
              this.supplierArray=arr;
            else
            {
              var obj1={"itemdes1":"","enquiry_no":""};
              obj.itemdes1="No items found";
              arr.push(obj1);
              this.supplierArray=arr;
            }
          }
        }
        },
        FnSelectEnquiry3:function(e){
        this.querySelector('#transportinput4').style.visibility='hidden';
        autoc_supplier_name = e.target.selectedItem.textContent.trim();
        autoc_item_id = e.target.selectedItem.value.trim();
        this.supplierArray=[];
        document.querySelector('#transportinput4').selected=-1;
        this.value2=autoc_supplier_name;
      },
      pr_itemname_auto_fn:function(){
        var itemname_auto=this.tempitemname1;
        Polymer.Base.async(function () {
        var autocompleteSuggestions = document.querySelector('#pr_item_auto_sugg_id');
        autocompleteSuggestions.source =itemname_auto;
        // alert(JSON.stringify(autocompleteSuggestions.source))
      });
    },
    sup_name_auto_comp_fn:function(){
      Polymer.Base.async(function () {
      var autocompleteSuggestions = document.querySelector('#sup_auto_sugg_id');
      autocompleteSuggestions.source =auto_sup_arr;
    });
    },
  //autocomplete***********End
});
