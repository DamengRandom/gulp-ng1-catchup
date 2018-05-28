angular.module('GulpNgDemo')
    .controller('ThirdCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
        $scope.title = 'Hi there, third';
        $scope.val1 = 10;
        $scope.val2 = 20;
        $rootScope.valSum = 0;

        var scretX= 0;

        $scope.showResult = false;
        $scope.calResult = function(){
            $scope.valSum = $scope.val1 + $scope.val2;
            $scope.valSum !== 0 ? $scope.showResult = true : $scope.showResult = false; 
            console.log('values: ', $scope, $scope.valSum, $scope.showResult);
            scretX = $rootScope.valSum;
            return $rootScope.valSum;
        }
        // console.log('values: ', scretX, $scope.showResult);
    }])