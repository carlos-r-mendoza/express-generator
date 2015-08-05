'use strict';

app.directive('customTable', function($sce) {
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
			var row = {
			column1: "",
			column2: "",
			column3: "",
			};
			console.log('element', element)
			scope.sortData = function(indx) {
				scope.predicate = Object.keys(row)[indx];
				scope.reverse = !scope.reverse;
			}


			scope.$watch('predicate', function(newVal, oldVal){
				scope.predicate = newVal;
				//console.log('wt', scope.predicate);
			})

			// once values change in parent controller, update 
			scope.$watch('data', function(newVal, oldVal) {

				//console.log('attrs', scope.type, scope.data, scope.headers)
				scope.rows = [];
				angular.forEach(scope.data, function(task, indx){
					
					row = {
						column1: "",
						column2: "",
						column3: "",
						};

					row.column1 = indx + 1;
					//row.column2 = $sce.trustAsHtml('<input type="checkbox" />');
					row.column2 = task.title;
					row.column3 = task.completed;

					scope.rows.push(row);

				});

				console.log('a', scope.rows, scope.data)
				// pagination
				scope.itemsPerPage = 5;
				scope.currentPage = 0;
				scope.numberOfPages = new Array(Math.ceil(scope.rows.length / scope.itemsPerPage));
				scope.startPageRange = 0;
				scope.endPageRange = scope.itemsPerPage;

				scope.showPage = function(indx) {
					scope.startPageRange = scope.itemsPerPage * indx;
					scope.endPageRange = scope.itemsPerPage * (indx + 1);
				};

				scope.showPreviousPage = function() {
					if(scope.startPageRange - scope.itemsPerPage >= 0) {
						scope.startPageRange -= scope.itemsPerPage;
						scope.endPageRange -= scope.itemsPerPage; 
						scope.selected -= 1;
					}
				};

				scope.showNextPage = function() {
					if(scope.endPageRange + scope.itemsPerPage <= scope.rows.length) {
						console.log(scope.endPageRange, scope.rows.length)
						scope.startPageRange += scope.itemsPerPage;
						scope.endPageRange += scope.itemsPerPage; 
						scope.selected += 1;
					}
				};

				// active class for pagination
				scope.selected = 0;
				scope.setAsSelected = function(indx) {
					scope.selected = indx;
				}
			
			});
	
		scope.$watch('search', function(newVal, oldVal){
			scope.highlight = function(fullText, searchTerm) {
				console.log('highlighting');
				return $sce.trustAsHtml(fullText.replace(new RegExp(searchTerm, 'gi'), '<span class="highlight-text">$&</span>'));
			}
		})

		}
	}
});