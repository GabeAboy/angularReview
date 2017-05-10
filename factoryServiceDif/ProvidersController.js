var providerApp = angular.module('providers', []);

var someFunction = function() {
    this.someValue = 'some value';
    this.setSomeValue = function(value) {
        this.someValue = value;
    };

    this.$get = function() {
        return 'This is returned from $get in someFunction';
    };

    return 'This is returned from someFunction';
};


// returns a new instance of the function
providerApp.service('loonyService', someFunction);

// returns the function's return value
providerApp.factory('loonyFactory', someFunction);

// returns the output of the function's $get function
providerApp.provider('loonyProvider', someFunction);

providerApp.controller('ProviderController',
    function($scope, loonyService, loonyFactory, loonyProvider) {
    $scope.service = loonyService;

    $scope.factory = loonyFactory;
    $scope.provider = loonyProvider;
});