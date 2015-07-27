'use strict';

app.controller('CreateAccountController', ['$scope', 'States', function($scope, States) {


	$scope.states = States.get();
	


	}]);