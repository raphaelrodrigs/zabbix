'use strict';
var softControllers = angular.module('softControllers', []);

softControllers.controller('UserCreateCtrl', ['$scope', 'UserService',
  function($scope, UserService) {
  	$scope.user = {'name':'', 'age': ''};

  	$scope.save = function() {
  		UserService.save($scope.user);
		$scope.user = {'name':'', 'age': ''};  		
    }; 
   
  }]);

softControllers.controller('UserListCtrl', ['$scope', 'UserService',
  function($scope, UserService) {
  	$scope.users = [];

    $scope.list = function() {
    	angular.copy(UserService.list(), $scope.users);
    }
   
  }]);
