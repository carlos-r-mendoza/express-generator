'use strict';

app.directive('customTable', function($timeout) {
	return {
		restrict: 'E',
		templateUrl: '/directive/todo',
		scope: {
			headers: '=',
			data: '=',
			type: '@'	
		},
		// link runs after directive has been compiled and linked up
		link: function(scope, element, attrs) {
			// once values change in parent controller, update 
			scope.$watch('data', function(newVal, oldVal) {
			console.log('attrs', scope.type, scope.data, scope.headers)
			

			})
		}
	}
});