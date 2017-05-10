
angular.module('filters', [])
.filter('vowelStripper', function() {
    return function(input, otherCharacters) {
        input = input || '';
        otherCharacters = otherCharacters || '';
        var vowels = 'aeiou';
        console.log(input);
        console.log(otherCharacters);
        var out = '';
        for (var i = 0; i < input.length; i++) {
            var ch = input.charAt(i);
            out += !vowels.includes(ch) && !otherCharacters.includes(ch) ? ch : '';
        }
        return out;
    };
})
.controller('CustomFiltersController', ['$scope', function($scope) {
}]);
