'use strict';

app.controller('CreateAccountController', ['$scope', '$state', 'NewUser', function($scope, $state, NewUser) {

	// creates new user object to pass from state to state
	$scope.newUser = NewUser.create();

	// invalid password message
	$scope.userNameUnavailable = false;
	$scope.passwordLengthMessage = true;
	$scope.passwordNotMatchingMessage = false;

	// saves user
	$scope.saveUser = function(newUser) {
		// check for username availability
		NewUser.verifyUsername(newUser.username)
			.then(function(data){
				if (data.message === 'failed') {
					// username unavailable
					console.log('failed')
					$scope.userNameUnavailable = true;
				} else if (data.message === 'success' && newUser.password === newUser.confirmPassword) {
					// username available
					// update user in NewUser factory
					NewUser.update(newUser);
					// go to next step/state
					$state.go('user-info');
				}
			})
	};

	// watch password matching
	$scope.$watchCollection('newUser', function(new_val, old_val) {

		if(new_val.password >= 5) {
			$scope.passwordLengthMessage = false;
		} else { $scope.passwordLengthMessage = true; }

		if(new_val.confirmPassword && new_val.confirmPassword.length >= 5) {
			if(new_val.confirmPassword === new_val.password) {
				$scope.passwordNotMatchingMessage = false;
			} else { $scope.passwordNotMatchingMessage = true; }
		} else {
			$scope.passwordNotMatchingMessage = false;
		}

	});




}]);