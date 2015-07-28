'use strict';

app.controller('UserIncomeController', ['$scope', '$state', 'NewUser', function($scope, $state, NewUser) {

	// gets new user object to pass from state to state
	$scope.newUser = NewUser.get();

	// only shows if co-signer required
		// co-signer requires if assets are < 40k
	$scope.requireCosigner = false;
	$scope.showCosignerMessage = "";

	// saves user
	$scope.saveUser = function(newUser) {

		// update user
		NewUser.update(newUser);

		// validate assets is > 40k
		var assets = newUser.income.salary + newUser.income.checking + newUser.income.savings;

		if(assets >= 40000) {
			$state.go('billing-info');
		} else if(assets < 40000 && assets >= 20000) {
			$scope.requireCosigner = true;
			$scope.showCosignerMessage = "Your income is less than 40k. Therefore, a co-signer is required for you to open an account."
		} else {
			NewUser.verifyIncome(assets)
				.then(function(data){
					console.log('hello')
				})
		}

	};

}]);