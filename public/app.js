(function() {
  'use strict';
  var app = angular.module('stamplay', ['ui.router','ngStamplay'])
  .config(Config);
  Config.$inject = ['$stateProvider', '$urlRouterProvider'];
  app.run(function($location){
    var params = window.location.href.split("?")[1];
    if(params) {
      console.log("Login From Redirect.");
      console.log(window.location.href.split("?"));
    } else {
      // console.log("Not from redirect.");
    }
  });
  app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common = {
      "Content-Type" : "application/json",
    };
    $httpProvider.defaults.headers.put = {
      "x-stamplay-jwt" : window.localStorage.getItem("x-stamplay-jwt") || false
    };
});

function Config($stateProvider, $urlRouterProvider) {
  $stateProvider.state('Login',{
    url: '/',
    templateUrl: '/login.html',
  });
  $stateProvider.state('Home',{
    url: '/home',
    templateUrl: '/home.html',
  });
  $stateProvider.state('Signup',{
    url: '/signup',
    templateUrl: '/signup.html',
  });
  $urlRouterProvider.otherwise('/');
  }

})();


