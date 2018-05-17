angular.module('GulpNgDemo')
  .controller('SecondCtrl', ['$scope', '$parse', '$routeParams', function($scope, $parse, $routeParams){
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

    // $eval 
    $scope.x = $scope.arrayDemo[0].age
    $scope.y = $scope.arrayDemo[1].age;
    $scope.ageSum = $scope.$eval('arrayDemo[0].age + arrayDemo[1].age');
    console.log('ageSum: ', $scope.ageSum);

    // $parse
    var f = $parse('arrayDemo[0].age + arrayDemo[1].age')($scope);
    var f2 = $parse('x+y')({
      x: 910,
      y: 21
    });
    console.log('parse-Sums: ', f, f2);

    // object assign
    let arr1 = ['21', 'cd', true];
    let arr2 = ['489', 'chdsd', true, '783', 'false'];
    let objAssign = Object.assign({}, arr1.concat(arr2));
    let spreadObj = {...arr1.concat(...arr2)};
    console.log("objAssign: ", Object.values(objAssign));
    console.log("spreadObj: ", Object.values(spreadObj));
    if(objAssign === spreadObj){
      console.log('object assign result is same with spread object');
    }else {
      console.log('object assign result is different from spread object');
    }
    if(Object.values(objAssign) === Object.values(spreadObj)){
      console.log('object assign result is same with spread object, even convert to array');
    }else {
      console.log('object assign result is different from spread object, even convert to array');
    }
  }]);