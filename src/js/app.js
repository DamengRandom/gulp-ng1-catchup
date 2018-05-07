angular.module('GulpNgDemo', ['ngRoute'])
  .config([
    '$routeProvider' ,'$locationProvider', function($routeProvider, $locationProvider){
      $locationProvider.hashPrefix('');
      // $locationProvider.html5Mode(true);
      $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).when('/second/:sum', {
        templateUrl: 'views/second.html',
        controller: 'SecondCtrl',
        caseInsensitiveMatch: true
      }).otherwise({
        template: '<p>404 - Oops, No Contents available ...</p><a href="/">Back to Home </a>'
        // redirectTo: function(){
        //   alert('404 - Oops, No Contents available ..');
        //   return '/';
        // }
      });
    }
  ]);
