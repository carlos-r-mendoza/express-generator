'use strict';

app.directive('customTable', function($timeout) {
	return {
		restrict: 'E',
		templateUrl: '/directive/todo',
		scope: {
			headers: '=',
			data: '='	
		},
		// link runs after directive has been compiled and linked up
		link: function(scope, element, attrs) {
			// element refers to the outermost element of the directive
			// allows us to access any attributes that are set in the directives elements
			// scope.$watch(attrs.data, function(newValue){
			// 	console.log('watching', newValue)
			// })
		}
	}
});