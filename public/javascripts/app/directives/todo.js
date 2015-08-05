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
			console.log('element', element)


			// once values change in parent controller, update 
			scope.$watch('data', function(newVal, oldVal) {

				//console.log('attrs', scope.type, scope.data, scope.headers)
				
				angular.forEach(scope.data, function(task){
					var row = {
						column1: "",
						column2: "",
						column3: "",
						column4: ""
						};

					row.column1 = task.title;
					row.column2 = $sce.trustAsHtml('<input type="checkbox" />');
					row.column3 = task.completed;
					row.column4 = task.completed;

					scope.rows.push(row);

				});

				// pagination
				scope.itemsPerPage = 10;
				scope.currentPage = 0;
				scope.numberOfPages = new Array(Math.ceil(scope.rows.length / scope.itemsPerPage));
				scope.startPageRange = 0;
				scope.endPageRange = scope.itemsPerPage;

				
				scope.firstPage = function() {
					scope.startPageRange = 0;
					scope.endPageRange = scope.itemsPerPage;
				};

				scope.lastPage = function() {
					var numberOfRowsInLastPage = scope.rows.length % scope.itemsPerPage;
					if(numberOfRowsInLastPage === 0) {
						scope.startPageRange = scope.rows.length - scope.itemsPerPage;
					} else {
						scope.startPageRange = scope.rows.length - numberOfRowsInLastPage;
					}
					scope.endPageRange = scope.rows.length;
				};

				scope.showPage = function(indx) {
					scope.startPageRange = scope.itemsPerPage * indx;
					scope.endPageRange = scope.itemsPerPage * (indx + 1);
				}

				scope.showPreviousPage = function() {
					if(scope.startPageRange - scope.itemsPerPage >= 0) {
						scope.startPageRange -= scope.itemsPerPage;
						scope.endPageRange -= scope.itemsPerPage; 
					}
				}

				scope.showNextPage = function() {
					if(scope.endPageRange + scope.itemsPerPage <= scope.rows.length) {
						console.log(scope.endPageRange, scope.rows.length)
						scope.startPageRange += scope.itemsPerPage;
						scope.endPageRange += scope.itemsPerPage; 
					}
				}

			
				// scope.firstPage()


			});


		}
	}
});