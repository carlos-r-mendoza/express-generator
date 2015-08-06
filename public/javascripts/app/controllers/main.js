'use strict';

app.controller('MainController', ['$scope', '$state', 'Users', 'Posts', 'Comments', 'ToDo', 'Auth', '$rootScope', function($scope, $state, Users, Posts, Comments, ToDo, Auth, $rootScope) {
		
		//search friends
		$scope.search = '';

		//used to toggle ng-class in navigation bar
		$scope.navigation = '';

		Auth.getUserInfo()
			.then(function(data){
				console.log('ad', data)
				$scope.current_user = data;
				$scope.title = 'Welcome ' + $scope.current_user.username + '!';
				$rootScope.showLogoutBtn = true;
				// console.log(data.photos[0].value)
				// $rootScope.current_user_pic = data.photos[0].value;
			})


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
		$scope.selected = 'Profile';
		$scope.toggleProfile = function(user) {
			$scope.selected = 'Profile';

			$scope.user = user;

			//modifies view
			$scope.welcome_message = false;
			$scope.profile_posts = false;
			$scope.todoList = false;
			$scope.profile_details = true;
			//populates user details
			$scope.user_details = user;
			var friendName = user.name.replace(/\s/g, '-');

			$scope.selected_user = user.name;

			console.log('name', user.name)
			//$state.go('index.friend', { friendName: friendName});
		} 

		//profile button logic
		$scope.showUserProfile = function() {
			$scope.profile_posts = false;
			$scope.todo = false;
			$scope.todoList = false;


			$scope.profile_details = true;
		}

		//posts button logic
		$scope.showUserPosts = function() {
			$scope.profile_details = false;
			$scope.todoList = false;



			//gets user's posts
			Posts.getByUserId($scope.user.id)
				.then(function(data){
					$scope.user_posts = data;
				})

			$scope.profile_posts = true;
			// $state.go('index.friend.posts');


		}

		$scope.userToDoList = "";

		//gets post's comments when see comments button is clicked
		$scope.togglePostComments = function(post) {
			Comments.getByPostId(post.id)
				.then(function(data){
					post.comments = data;
				})
		}

		$scope.hello = {
			title: "hello"
		};

		$scope.table = {
			headings: [
				'Task',
				'Mark Completed',
				'Status'
				],
		};

		$scope.$watch($scope.table.data, function(newValue){
				console.log('watching', newValue)
		})

		$scope.showUserToDo = function() {
			ToDo.getByUserId($scope.user.id)
				.then(function(data){
					
					$scope.profile_posts = false;
					$scope.profile_details = false;
					$scope.todoList = true;
					$scope.table.data = data;
					console.log('todo', $scope.table.data)
					// var userTasks = [];
					// angular.forEach(data, function(userTasks, indx){
					// 	var newUserObj = {
					// 		column1: userTasks.title,
					// 		column2: userTasks.
					// 	}

					// 	console.log('value', value)
						
					// })

				})
		}

	}]);