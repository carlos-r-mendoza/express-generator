'use strict';

app.controller('PostsFeedController', ['$scope', '$state', 'Posts', function($scope, $state, Posts){
		
		Posts.get()
			.then(function(data){
				$scope.all_posts = data;
			});

	}]);