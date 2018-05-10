angular.module('GulpNgDemo')
  // .controller('HomeCtrl', ['$scope', function($scope){
  .controller('HomeCtrl', ['$scope', '$q', '$rootScope', '$timeout', 'CalService', 'CalFactory', function($scope, $q, $rootScope, $timeout, CalService, CalFactory){
    $scope.title = 'Hi there, mate !!';
    // console.log("CalService: ", CalService.getData());
    // $scope.getDataVal = CalService.getData();

    // angular.element($0).scope().title = "Hello, digested .."
    // "Hello, digested .."
    // angular.element($0).scope().$digest()
    // $digest() means to trigger angular to run the function again !!!

    // try one time bidning example: syntax is ::

    // pass variable to directive
    $scope.passVarToDirective = 'Pass variable to directive directly';

    $scope.val1 = 20;
    $scope.val2 = 20;
    $scope.sum = 0;
    
    $scope.doubleAndSum = () => {
      $scope.val1 = $scope.val1 * 2;
      $scope.val2 = $scope.val2 * 2;

      // factory way to get sum value
      // $scope.sum = CalFactory.getSumVal($scope.val1, $scope.val2); // factory way to get sum value (without callback)
      // CalFactory.getSumVal($scope.val1, $scope.val2, function(result){
      //   $scope.sum = result;
      // }); // factory way with callback function 
      
      // service way to get sum value
      // $scope.sum = CalService.getSumVal($scope.val1, $scope.val2);
      // CalService.getSumVal($scope.val1, $scope.val2, function(result){
      //   $scope.sum = result;
      // }); // service way with callback function to get the sum result
      
      // provider way to get sum value:
      CalService.getSumVal($scope.val1, $scope.val2, function(result){
        $scope.sum = result;
      }); 
    }

    // form part
    $scope.username = '';
    $scope.age = undefined;
    $scope.hobby = ''; 

    $scope.previewData = function() {
      $scope.dataObj = {
        username: $scope.username,
        age: $scope.age,
        hobby: $scope.hobby
      }
      $scope.collect = CalService.collectData($scope.dataObj);

      $scope.dataStr = JSON.stringify($scope.dataObj);
      console.log("$scope.dataStr: ", $scope.dataStr);

      $scope.$watch('collect', function(oldVal, newVal){
        if(oldVal !== newVal) console.log('Updated: ', newVal);
        if(newVal.age > 20) newVal.age = 100;
      });

      $rootScope.$watch(function(){
        console.log('Digest iteration started ...');
      });
      
      return $scope.collect;
    }

    // basic promise understanding 
    // function add(a, b , cb){
    //   $timeout(() => {
    //     cb(a+b);
    //   }, 1000);
    // }

    // var startTime = Date.now();
    
    // add(6, 5, function(res){
    //   add(res, 10, function(res){
    //     $scope.triggerTime = Date.now() - startTime;
    //     $scope.promiseResponse = res;
    //   });
    // });

    // above way get code messy ...





    // so we do promise way and see the result:
    // var startTime = Date.now();
    // function add(a, b){
    //   return $timeout(() => {
    //     return a + b;
    //   }, 1000);
    // }   

    // add(10, 5).then((res) => {
    //   return add(res, 5);
    // }).then((res) => {
    //   return add(res, 5);
    // }).then((res) => {
    //   $scope.promiseResponse = res;
    //   $scope.triggerTime = Date.now() - startTime;
    //   return $scope.promiseResponse;
    // }, (err) => {
    //   console.log('err: ', err);
    // });

    // we use $q function to do promise call
    var startTime = Date.now();
    $scope.firstVal;
    $scope.secondVal;
    
    $scope.triggerAdd = function(){
      alert('triggered ...');
      function add(a, b){
        var q = $q.defer();
        setTimeout(() => {
          if(a + b > 0){
            q.resolve(a + b);
          }else {
            q.reject('Sry, value must be positive');
          }        
        }, 1000);
        return q.promise;
      }
      add($scope.firstVal, $scope.secondVal).then((res) => {
        return res;
      }).then((res) => {
        return res + 5; // straight away run calculation instead of calling a function // better performance
      }).then((res) => {
        return add(res, 10);
      }).then((res) => {
        $scope.promiseResponse = res;
        return $scope.promiseResponse;
      }).catch((err) => {
        alert(err);
      }).finally(() => {
        $scope.triggerTime = Date.now() - startTime; // finally count time: finally means no matter what happens, the function will get run anyway
      });
    }
  }]);



// try $apply() by writing a normal function
var btnClick = function(){
  var $scope = angular.element($('#ngView')).scope();
  $scope.sum = $scope.val1 + $scope.val2;
  if(!$scope.sum){
    $scope.sum = 0;
  }
  $scope.$apply();
} 