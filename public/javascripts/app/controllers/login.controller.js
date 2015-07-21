'use strict';

app.controller('AuthController', ['$scope', 'Login', function($scope, Login){
	$scope.login = {
		username: '',
		password: ''
	}

	$scope.loginPost = function(credentials) {
		console.log('sedning', credentials)
		Login.post(credentials)
			.then(function(data){
				console.log('returned', data)
			})
	}

}]);
