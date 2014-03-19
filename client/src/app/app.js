var app = angular.module('app', []);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

app.controller('AppCtrl', function($scope) {
  $scope.userName = "Raf";
  $scope.movies = ["The Godfather", "The Shining"];
});
