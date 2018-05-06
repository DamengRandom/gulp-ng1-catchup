angular.module('GulpNgDemo')
  // .controller('HomeCtrl', ['$scope', function($scope){
  .controller('HomeCtrl', ['$scope', 'CalService', 'CalFactory', function($scope, CalService, CalFactory){
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
  }]);
