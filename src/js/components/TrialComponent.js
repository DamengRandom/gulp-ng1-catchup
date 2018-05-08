angular.module('GulpNgDemo')
  .component('trialComponent', {
    bindings: {
      addName: '&'
    },
    controller: [function(){
      $ctrl = this;
      $ctrl.addTheName = function(){
        $ctrl.addName({ name: $ctrl.newName });
        $ctrl.newName = "";
      }
    }],
    templateUrl: 'components/trial-component.html'
  })
  .component('secondComponent', {
    bindings: {
      seccompval: '@'
    },
    controller: [function(){
      var $ctrl = this;
      $ctrl.$onInit = function(){
        $ctrl.seccompval = $ctrl.seccompval || "Second Component Value bad return";
        console.log("ctrl: ", $ctrl.seccompval);
      }
      $ctrl.addName = function(name){
        $ctrl.seccompval = name;
      }
    }],
    templateUrl: 'components/second-component.html'
  })