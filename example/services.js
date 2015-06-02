'use strict';

var softServices = angular.module('softServices', []);

softServices.service('UserService', 
  function() {
  	/* Global instance */
  	var usersList = [];

    this.list = function() {
    	return usersList;
  	};
  	this.save = function(user) {
  		usersList.push(user);
  	};
});