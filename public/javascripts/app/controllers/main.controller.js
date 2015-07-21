'use strict';

app.controller('MainController', ['$scope', '$state', 'Users', 'Posts', 'Comments', function($scope, $state, Users, Posts, Comments){
		
		$scope.title = 'Sample Social Media Application Using Angular and Express!';

		//gets all users
		Users.get()
			.then(function(data){
				$scope.users = data;
			});

		//message displayed in profile/posts section when page is first loaded
		$scope.welcome_message = true;

		// defines user when toggleProfile is triggered
		$scope.user;

		//gets user's posts when view profile button is clicked
		$scope.toggleProfile = function(user) {

			$scope.user = user;

			//modifies view
			$scope.welcome_message = false;
			$scope.profile_posts = false;
			$scope.profile_details = true;
			//populates user details
			$scope.user_details = user;
			var friendName = user.name.replace(/\s/g, '-');

			$scope.selected_user = user.name;

			console.log('name', user.name)
			$state.go('index.friend', { friendName: friendName});
		} 

		//profile button logic
		$scope.showUserProfile = function() {
			$scope.profile_posts = false;


			$scope.profile_details = true;
		}

		//posts button logic
		$scope.showUserPosts = function() {
			$scope.profile_details = false;


			//gets user's posts
			Posts.getByUserId($scope.user.id)
				.then(function(data){
					$scope.user_posts = data;
				})

			$scope.profile_posts = true;
			$state.go('index.friend.posts');


		}

		//gets post's comments when see comments button is clicked
		$scope.togglePostComments = function(post) {
			Comments.getByPostId(post.id)
				.then(function(data){
					post.comments = data;
				})
		}

	}]);