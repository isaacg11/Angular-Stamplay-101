Stamplay.init(''); //YOUR APPID GOES HERE!

//FACTORY

(function() {
  'use strict';
  angular.module('stamplay')
  .factory('homeFactory', homeFactory);

  function homeFactory($http, $q) {

  return {
    register : function(userInfo){
      var q = $q.defer();
      Stamplay.User.signup(userInfo).then(function(){
        q.resolve();
      });
      return q.promise;
    },
    signIn : function(userInfo){
      var q = $q.defer();
      Stamplay.User.login(userInfo, function(err, res){
        q.resolve();
      });
      return q.promise;
    },
    getUser : function(){
      var q = $q.defer();
      Stamplay.User.currentUser().then(function(user){
        q.resolve(user);
      });
      return q.promise;
    },
    newTask : function(newTask) {
      var q = $q.defer();

      var taskObject = {
        description: newTask,
        completed_status: false
      };

      Stamplay.Object('task').save(taskObject, function(err, res){
          q.resolve(res);
      });
      return q.promise;
    },
    getTask : function(user) {
      var q = $q.defer();
      var ownerID = user._id;
      Stamplay.Query('object','task').equalTo('owner', ownerID)
      .exec(function(err, res){
        if(err) return console.log(err);
        q.resolve(res);
    });
      return q.promise;
    },
    updateTask : function(id) {
      var q = $q.defer();

      var completedObj = {
        _id: id,
        completed_status: true
      };

      Stamplay.Object('task').update(completedObj._id, completedObj, function(res){
          q.resolve(res);
      });
      return q.promise;
    },
    deleteTask : function(id) {
      var q = $q.defer();
      var objectID = id;

      Stamplay.Object('task').remove(objectID, function(err, res){
          q.resolve(res);
      });
      return q.promise;
    }

  };

}
})();
