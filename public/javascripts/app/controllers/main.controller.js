var app = angular.module("ngMyApp", []);

app.controller("mainController", ["$scope", "MainFactory", function($scope, MainFactory){
		
		$scope.title = "This is my test app for Angular and Express!";

		MainFactory.getInfo()
			.then(function(info){
				$scope.info = info;
			})



	}]);