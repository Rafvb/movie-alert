var movies = angular.module('movies', []);

movies.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.when('/movies', {
      templateUrl: 'movies/movies.tpl.html',
      controller: 'MoviesCtrl'
    });
  }]);

movies.controller('MoviesCtrl', ['$scope', 
  function($scope) {
    $scope.userName = "Raf";
    $scope.movies = ["The Godfather", "The Shining"];
  }]);