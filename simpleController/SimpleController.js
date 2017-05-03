angular.module('calculator',[])
  .controller('CalcController',function() {
    this.num1=4;
    this.num2=2;

    this.add = function total() {
      return this.num1 + this.num2;
    };
  });
