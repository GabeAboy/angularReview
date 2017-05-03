var studentApp = angular.module('students',['studentService']);

studentApp.controller('GirlController',
  ['$scope','StudentService',function($scope,ss) {
      $scope.girl='';

      $scope.addGirl=function() {
        console.log('girl');
        ss.addStudent($scope.girl);
      };
}]);

studentApp.controller('BoyController',['$scope','StudentService',function($scope,ss) {
  $scope.boy=''

  $scope.addBoy=function() {
    ss.addStudent($scope.boy)
  }
}])
studentApp.controller('DisplayController',['$scope','StudentService',function($scope,ss) {
  $scope.displayStudents=function() {
    ss.displayStudents()
  }
}])
