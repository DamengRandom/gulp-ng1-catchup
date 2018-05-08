angular.module('GulpNgDemo')
  .controller('SecondCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.trialPageTitle = 'Trial Page';
    if($routeParams.sum === 0 || $routeParams.sum === '0'){
      $scope.passedParamSum = '';
    }else {
      $scope.passedParamSum = $routeParams.sum;
    }

    $scope.arrayDemo = [
      {
        name: 'dachou',
        age: 29,
        hobby: 'soccer'
      },
      {
        name: 'chouchou',
        age: 28,
        hobby: 'study'
      },
      {
        name: 'xiaochou',
        age: 0,
        hobby: 'sleep'
      }
    ];
    
  }]);