Stamplay.init(''); //YOUR APPID GOES HERE!

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('loginController', loginController);
  loginController.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay"];

  function loginController(homeFactory, $state, $http, $scope, $stamplay){

  /****************************/
  /*    LOGIN AND SIGNUP      */
  /****************************/
  $scope.login = function() {
    var userEmail = $scope.em;
    var userPassword = $scope.pass;

    var registrationData = {
      email: userEmail,
      password: userPassword
    };

    homeFactory.signIn(registrationData).then(function(){
      $state.go('Home');
    });
  };

}
})();





