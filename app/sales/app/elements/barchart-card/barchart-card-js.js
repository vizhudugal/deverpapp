(function() {
  'use strict';
Polymer({
  is: "barchart-card",
  ready:function(){  
  },
    barchartloading:function(e){
      document.getElementById("chartContainer").innerHTML = "barchart is loaded.";
      var dataPoints1 = [];
      for(var key in e[0]){
        dataPoints1.push({label: key, y: parseInt(e[0][key])});
    }
      var chart = new CanvasJS.Chart("chartContainer",{
        data: [{
          type: "column",
          dataPoints: dataPoints1
        }]
      });
      chart.render();
    }
});
})();
