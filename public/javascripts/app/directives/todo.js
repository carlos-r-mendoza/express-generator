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
			scope.rows = [];


			// once values change in parent controller, update 
			scope.$watch('data', function(newVal, oldVal) {

				console.log('attrs', scope.type, scope.data, scope.headers)
				
				angular.forEach(scope.data, function(task){
					var row = {
						column1: "",
						column2: "",
						column3: "",
						column4: ""
						};

					row.column1 = task.title;
					row.column2 = "<h1>hello</h1>";
					row.column3 = task.completed;
					row.column4 = task.completed;

					scope.rows.push(row);

				});

				console.log('rows', scope.rows)

			})
		}
	}
});