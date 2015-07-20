'use strict';

app.controller('MainController', ['$scope', 'Users', 'Posts', 'Comments', function($scope, Users, Posts, Comments){
		
		$scope.title = 'Sample Social Media Application Using Angular and Express!';
			
		//gets all users
		Users.get()
			.then(function(data){
				$scope.users = data;
			});

		Posts.get()
			.then(function(data){
				$scope.all_posts = data;
			});

		//message displayed in profile/posts section when page is first loaded
		$scope.welcome_message = true;

		//gets user's posts when view profile button is clicked
		$scope.toggleProfile = function(user) {
			//modifies view
			$scope.welcome_message = false;
			$scope.profile_posts = false;
			$scope.profile_details = true;
			//populates user details
			$scope.user_details = user;
			//gets user's posts
			Posts.getByUserId(user.id)
				.then(function(data){
					$scope.user_posts = data;
				})
		} 

		//profile button logic
		$scope.showUserProfile = function() {
			$scope.profile_posts = false;
			$scope.profile_details = true;
		}

		//posts button logic
		$scope.showUserPosts = function() {
			$scope.profile_details = false;
			$scope.profile_posts = true;
		}

		//gets post's comments when see comments button is clicked
		$scope.togglePostComments = function(post) {
			Comments.getByPostId(post.id)
				.then(function(data){
					post.comments = data;
				})
		}

	}]);