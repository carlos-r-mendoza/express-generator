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

	};

	// custom track by function for city ng-repeat
	var cityIdCounter = 0;
	$scope.myTrackingFunction = function(city) {
		return city.id = cityIdCounter += 1;
	}

	// verify zipCode based on city & state
	$scope.verifyZipCode = function() {
		var city_info;

		if ($scope.newUser.address.city && 
			$scope.newUser.address.zipCode && 
			$scope.newUser.address.zipCode.toString().length === 5) {

			States.verifyZipCode($scope.newUser.address.zipCode)
				.then(function(data){
					city_info = JSON.parse(data);

					if(data.message) {

					} else if($scope.newUser.address.city === city_info.city) {
						
					} else {

					}
				});

		}
	
	};



}]);