var app = angular.module("ngMyApp", []);

app.controller("mainController", ["$scope", "MainFactory", function($scope, mainFactory){
		
		$scope.title = "This is my test app for Angular and Express!";

		mainFactory.getInfo()
			.then(function(info){
				$scope.info = info;
			})



	}]);