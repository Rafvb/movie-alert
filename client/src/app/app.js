var app = angular.module('app', [
  'ngRoute',
  'movies',
  'templates.app',
  'templates.common']);

app.config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/movies'});
  }]);

app.controller('AppCtrl', ['$scope', 
  function($scope) {
  }]);
