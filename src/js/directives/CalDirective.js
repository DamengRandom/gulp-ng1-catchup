angular.module('GulpNgDemo')
  .directive('subtitleMessage', function(){
    return {
      transclude: true,
      // template: '<i>{{ passVarToDirective }}</i>'
      templateUrl: 'directives/subtitle-message.html'
    }
  })
  .directive('formData', function(){
    return {
      transclude: true,
      templateUrl: 'directives/form-data.html'
    }
  })