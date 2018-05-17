 angular.module('GulpNgDemo')
  .directive('cardDemo', function(){
    return {
      restrict: 'E',
      scope: {
        isolate: '='
      },
      transclude: true,
      replace: true,
      templateUrl: 'directives/card-demo.html',
      link: function(scope, elem, attrs){
        scope.likeBtn = function(){
          alert('I love it ..');
        }
      }
    }
  })