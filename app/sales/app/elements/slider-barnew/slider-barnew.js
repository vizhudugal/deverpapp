(function() {
  'use strict';
  Polymer({
    is: 'slider-barnew',
    sliderfunction:function(arr)
     {    
      var orderquantity=arr[0].order_quantity;
      var itemavailablequantity=arr[0].item_available_quantity;
        this.max1=orderquantity;
        this.value1=itemavailablequantity;

     }
  });
})();
