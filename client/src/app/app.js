var app = angular.module('app', []);

app.controller('AppCtrl', function($scope) {
  $scope.userName = "Raf";
  $scope.movies = ["The Godfather", "The Shining"];
});
