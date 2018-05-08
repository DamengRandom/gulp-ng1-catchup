 angular.module('GulpNgDemo')
  .directive('cardDemo', function(){
    return {
      restrict: 'A',
      scope: {
        isolate: '='
      },
      templateUrl: 'directives/card-demo.html',
      link: function(scope, elem, attrs){
        scope.likeBtn = function(){
          alert('I love it ..');
        }
      }
    }
  })