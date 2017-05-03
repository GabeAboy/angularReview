angular.module('calculator',[])
  .controller('CalcController',function() {
    this.num1=4;
    this.num2=2;

    this.add = function () {
      return this.num1 + this.num2;
    };
    this.subtract = function() {
      return this.num1 - this.num2;
    };
    this.multiply = function() {
      return this.num1 * this.num2;
    };
    this.divide = function() {
      return this.num1 / this.num2;
    };
  });
