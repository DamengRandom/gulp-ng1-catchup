angular.module('GulpNgDemo')
  .factory('CalFactory', ['$http', '$log', function($http, $log){
    $log.log('Instaniated the CalFactory instance now ..');
    var CalServiceFactory = {};
    // CalServiceFactory.getSumVal = function(a, b){
    //   return parseInt(a) + parseInt(b);
    // }
    CalServiceFactory.getSumVal = function(a, b, cb){
      var s = parseInt(a) + parseInt(b);
      cb(s);

      // using http is call as ajax for getting values dynamically and do the calculations after collect all the params
      // $http({
      //   url: `http://localhost:3000/Sum?a=${a}&b=${b}`,
      //   method: 'GET'
      // }).then(function(res){
      //   $log.log('Success response: ', res.data);
      //   cb(res.data);
      // }, function(err){
      //   $log.error('Failure response: ', err);
      // });
    }
    return CalServiceFactory;
  }]);  