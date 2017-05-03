angular.module('hello',[]).controller('HelloController',["$scope",function($scope) {
  $scope.entity='World';
  $scope.customPerson = '';

  $scope.randomEntity=[
    "One",
    "Two",
    "Three",
    "Four",
    "Five"
  ];
  $scope.generateRandomEntity = function() {
    $scope.entity = $scope.randomEntity[Math.floor(Math.random() * 5)];
  };
  $scope.generateSpecificEntity = function(name) {
    console.log(name);
    $scope.entity = name;
  };

}]);
