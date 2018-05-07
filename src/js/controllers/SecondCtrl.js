angular.module('GulpNgDemo')
  .controller('SecondCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.trialPageTitle = 'Trial Page';
    if($routeParams.sum === 0 || $routeParams.sum === '0'){
      $scope.passedParamSum = '';
    }else {
      $scope.passedParamSum = $routeParams.sum;
    }
  }]);