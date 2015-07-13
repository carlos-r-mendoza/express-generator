var app = angular.module("ngMyApp", []);

app.controller("mainController", ["$scope", function($scope){
		$scope.title = "This is my test app for Angular and Express!";
	}]);