angular.module('calculatorService',[])
  .factory('CalcService',function() {
    var add = function(num1,num2) {
      return num1+num2
    };
    var subtract = function(num1,num2) {
      return num1-num2
    };
    var multiply = function(num1,num2) {
      return num1*num2
    };
    var divide = function(num1,num2) {
      return num1/num2
    };
    return{
      add:add,
      multiply:multiply,
      divide:divide,
      subtract:subtract
    };
  });
