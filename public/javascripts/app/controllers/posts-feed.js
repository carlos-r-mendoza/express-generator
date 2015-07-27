'use strict';

app.controller('PostsFeedController', ['$scope', 'Posts', function($scope, Posts){
		
		Posts.get()
			.then(function(data){
				$scope.all_posts = data;
			});

	}]);