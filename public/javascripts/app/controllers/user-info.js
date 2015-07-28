'use strict';

app.controller('UserInfoController', ['$scope', '$state', 'States', 'NewUser', function($scope, $state, States, NewUser) {

	// populats states in form
	$scope.states = States.get();
	// gets new user object to pass from state to state
	$scope.newUser = NewUser.get();
	// invalid zip code message
	$scope.invalidZip = "Sorry, that's an invalid ZipCode."

	// saves user
	$scope.saveUser = function(newUser) {
		NewUser.update(newUser);

		// password matching validator
		if(newUser.password === newUser.confirmPassword) {
			$state.go('income-info');
		} else {
			$scope.passwordMessage = "Your passwords must match."
		}

	};

}]);