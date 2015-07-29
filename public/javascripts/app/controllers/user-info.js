'use strict';

app.controller('UserInfoController', ['$scope', '$state', 'States', 'NewUser', function($scope, $state, States, NewUser) {



	// NewUser.verifyAddress()	
	// 	.then(function(data){
	// 		console.log('this is it', data);
	// 	})

	// populats states in form
	$scope.states = States.get();
	// gets new user object to pass from state to state
	$scope.newUser = NewUser.get();
	// invalid zip code message
	$scope.invalidZip = "Sorry, that's an invalid ZipCode."
	// sets cities to empty array on initialization 
	$scope.stateCities = [];

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

	// get state's cities
	$scope.getCities = function(state) {
		var stateName = state.split(" - ")[1];

		States.getCitiesOfState(stateName)
			.then(function(data){
				$scope.stateCities = data.cities;
			});

	}



}]);