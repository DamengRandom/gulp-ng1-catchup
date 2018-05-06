angular.module('GulpNgDemo', ['ngRoute'])
  .config([
    // '$routeProvider' ,'$locationProvider', 'CalServiceProvider', function($routeProvider, $locationProvider, CalServiceProvider){
    '$routeProvider' ,'$locationProvider', function($routeProvider, $locationProvider){
      $locationProvider.hashPrefix('');
      $locationProvider.html5Mode(true);
      $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
      // CalServiceProvider.config(parseInt(10));
    }
  ]);