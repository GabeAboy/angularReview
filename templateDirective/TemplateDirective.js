
var candidateApp = angular.module('candidates', []);

candidateApp
.controller('CandidateController', ['$scope', function($scope) {
    $scope.candidate = {
      name: 'Donald Trump',
      party: 'Republican',
      spouse: 'Melania Trump'
    };
}])
.directive('loonyCandidate', function() {
    return {
        template: 'Name: {{candidate.name}} ({{candidate.party}}) Spouse: {{candidate.spouse}}'
    };
});

