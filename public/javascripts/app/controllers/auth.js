'use strict';

app.controller('AuthController', ['$scope', 'Session', function($scope, Session){

	$scope.logout = function() {
		console.log("out", Session)
	}

}]);
