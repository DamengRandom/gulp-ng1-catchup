angular.module('GulpNgDemo')
  .provider('CalService', function(){ 
    // put the service name (CalService) as provider required
    var thirdParam = 1;
    this.config = function(newParam){
      thirdParam = newParam;
    }
    this.$get = ['$log', function($log){
      var CalServiceService = {};
      $log.log('provider now? ');
      CalServiceService.getSumVal = function(a, b, cb){
        var s = parseInt(a) + parseInt(b) + parseInt(thirdParam);
        // var s = parseInt(a) + parseInt(b);
        return cb(s);
      }
      return CalServiceService;
    }]
  })
  .config(['CalServiceProvider', function(CalServiceProvider){
    CalServiceProvider.config(10);
  }]);