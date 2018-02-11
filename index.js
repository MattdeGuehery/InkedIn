var app = angular.module("inkedIn", []);

app.controller('loginForm', function($scope) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';
    $scope.password = '';

    var loginForm = [
        {
            label: "First Name",
            type: "text",
            variable: $scope.firstName
        },
        {
            label: "Last Name",
            type: "text",
            variable: $scope.lastName        
        },
        {
            label: "Email",
            type: "email",
            variable: $scope.email        
        },
        {
            label: "Password",
            type: "password",
            variable: $scope.password
        },
    ];

    $scope.loginForm = loginForm;
});

app.directive("formDirective", function() {
    return {
        templateUrl: "./login.html",
        controller: 'loginForm'
    }
});