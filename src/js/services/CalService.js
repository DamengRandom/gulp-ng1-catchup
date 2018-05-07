angular.module('GulpNgDemo')
  .service('CalService', ['$log', function($log){
    $log.log('Lazy loading service file ...');

    var returnData = "data returned";
    this.getData = function(){
      return returnData;
    }

    // this.getSumVal = function(a, b){  
    //   return parseInt(a) + parseInt(b);
    // } // this is synchronaous way to do calculation

    this.getSumVal = function(a, b, cb){
      var s = parseInt(a) + parseInt(b);
      return cb(s);
    }

    this.collectData = function(formData){
      console.log('form data object: ', formData);
      return formData;
    }
  }]);
  