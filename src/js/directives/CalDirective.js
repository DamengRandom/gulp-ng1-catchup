angular.module('GulpNgDemo')
  .directive('subtitleMessage', function(){
    return {
      // template: '<i>{{ passVarToDirective }}</i>'
      templateUrl: 'directives/subtitle-message.html'
    }
  })
  .directive('formData', function(){
    return {
      templateUrl: 'directives/form-data.html'
    }
  })