(function() {
  'use strict';
  var strategyname;
Polymer({
  is: 'quality-param-new-strat',

  valuechanged:function(){
     strategyname=this.strategyname;
    document.querySelector("quality-param-new-strat-item").strategypostvalue(strategyname);
  },
 newparameteradd:function(){
   var x = document.getElementById('refrehdiv').innerHTML;
   document.getElementById('refrehdiv').innerHTML = x;
 }
  });
})();
