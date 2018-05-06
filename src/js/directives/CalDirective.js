angular.module('GulpNgDemo')
  .directive('subtitleMessage', function(){
    return {
      template: '<i>{{ passVarToDirective }}</i>'
    }
  })