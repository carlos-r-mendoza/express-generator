'use strict';

app.controller('CreateAccountController', ['$scope', '$state', 'NewUser', function($scope, $state, NewUser) {

	// creates new user object to pass from state to state
	$scope.newUser = NewUser.create();

	// invalid password message
	$scope.passwordMessage = null;

	// saves user
	$scope.saveUser = function(newUser) {
		NewUser.update(newUser);

		// password matching validator
		if(newUser.password === newUser.confirmPassword) {
			$state.go('user-info');
		} else {
			$scope.passwordMessage = "Your passwords must match."
		}

	};


}]);