angular.module('calculator',['calculatorService'])
  .controller('CalcController',['CalcService',function(calcService) {
    this.num1=4;
    this.num2=2;

    this.add = function () {
      return calcService.add(this.num1,this.num2)
    };
    this.subtract = function() {
      return calcService.subtract(this.num1,this.num2)
    };
    this.multiply = function() {
      return calcService.multiply(this.num1,this.num2)
    };
    this.divide = function() {
      return calcService.divide(this.num1,this.num2)
    };
  }]);
