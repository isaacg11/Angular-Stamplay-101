Stamplay.init(''); //YOUR APPID GOES HERE!

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('signupController', signupController);
  signupController.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay"];

  function signupController(homeFactory, $state, $http, $scope, $stamplay){

  /****************************/
  /*    LOGIN AND SIGNUP      */
  /****************************/
  $scope.signup = function() {
    var userEmail = $scope.em;
    var userPassword = $scope.pass;

    var registrationData = {
      email: userEmail,
      password: userPassword
    };

    homeFactory.register(registrationData).then(function(){
      $state.go('Home');
    });

  };

}
})();