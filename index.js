var app = angular.module("inkedIn", []);

app.controller('loginForm', function($scope) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';
    $scope.password = '';

    $scope.submitForm = function() {
        if ($scope.loginForm.$valid) {
            console.log('Form is valid');
        } else {
            console.log('Form is invalid');
        }
    };
});

app.directive("formDirective", function() {
    return {
        templateUrl: "./login.html",
        controller: 'loginForm'
    }
});