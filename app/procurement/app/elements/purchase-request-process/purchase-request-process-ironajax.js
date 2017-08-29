var auto_pr_item_arr=[];
Polymer({
  is: "purchase-request-process-ironajax",
  ready: function() {
    auto_pr_item_arr=[];
    // this.loggedrole={itemname:"rci roll"};
  },
  searchitem:function(e){
    var json={};
    json.itemid=e;
    this.searchitemparam=json;
    // alert(JSON.stringify(this.searchitemparam))
    this.$.searchitem.generateRequest();
  },
  handlepurchase_requestsave:function(e){
    alert(e.detail.response.returnval)
  },
  handlepurchase_requestlabel:function(){
    document.querySelector("purchase-request-process").purchase_requestlabel(this.purchase_requestlabel);
  },
  handleItems:function(e){
    document.querySelector("purchase-request-process").itemdata(e.detail.response.itemdetails);
  },
  savedata:function(data){
    alert(JSON.stringify(data))
    this.purchase_requestparam=data;
    this.$.purchase_requestia.generateRequest();
  },
  handlepurchase_requestitems:function(e){
    document.querySelector('purchase-request-process').itemnames=e.detail.response.itemnames;
    var pr_auto_Data=e.detail.response.itemnames;
    for (var i = 0; i < pr_auto_Data.length; i++) {
      auto_pr_item_arr.push({text:pr_auto_Data[i].item_name,value:pr_auto_Data[i].item_id});
    }
    // alert(JSON.stringify(auto_pr_item_arr));
    document.querySelector('purchase-request-process').tempitemname1=auto_pr_item_arr;
  }
});
