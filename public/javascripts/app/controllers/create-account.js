'use strict';

app.controller('CreateAccountController', ['$scope', '$state', 'NewUser', function($scope, $state, NewUser) {

	// creates new user object to pass from state to state
	$scope.newUser = NewUser.create();

	// invalid password message
	$scope.passwordLengthMessage = true;
	$scope.passwordMessage = null;
	$scope.passwordNotMatchingMessage = false;

	// saves user
	$scope.saveUser = function(newUser) {
		NewUser.update(newUser);

		// password matching validator
		if(newUser.password === newUser.confirmPassword) {
			//$state.go('user-info');
		} else {
			$scope.passwordMessage = "Your passwords must match."
		}

		// check for username availability
		NewUser.verifyUsername(newUser.username);

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