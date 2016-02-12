
Stamplay.init(''); //YOUR APPID GOES HERE!

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('homeController', homeController);
  homeController.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay"];

  function homeController(homeFactory, $state, $http, $scope, $stamplay){

  //GLOBAL VARIABLES
  $scope.allTasks = $scope.allTasks ? $scope.allTasks : [];


  /****************************/
  /*  GET USER & USERs TASK   */
  /****************************/
  homeFactory.getUser().then(function(user) {
      $scope.userName = user.user.email;
      homeFactory.getTask(user).then(function(tasks) {
        if(tasks.data.length > 0){
          $scope.allTasks = tasks.data;
        }
        else{
          $scope.allTasks = [];
        }
      });
	});

  
 ///****************************/
 ///*       CREATE TASK        */
 ///****************************/
	$scope.addTask = function(task){  
		homeFactory.newTask(task).then(function(res){
			$scope.allTasks.push(res);
			$scope.task = "";
		});
	};

  /****************************/
  /*       COMPLETE TASK      */
  // **************************
	$scope.completeTask = function(id){
		homeFactory.updateTask(id).then(function(){
      console.log('task completed');
		});
	};

  /****************************/
  /*       DELETE TASK        */
  /****************************/
	$scope.deleteTask = function(id, index){
		homeFactory.deleteTask(id).then(function(){
			$scope.allTasks.splice(index, 1);
	  });


	};

}
})();