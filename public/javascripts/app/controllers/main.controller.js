'use strict';

var app = angular.module('ngMyApp', []);

app.controller('mainController', ['$scope', 'UsersFactory', 'PostsFactory', 'CommentsFactory', function($scope, UsersFactory, PostsFactory, CommentsFactory){
		
		$scope.title = "Sample Social Media Application Using Angular and Express!";

		//Friends List Section

		UsersFactory.getUsers()
			.then(function(data){
				$scope.users = data;
			})

		PostsFactory.get()
			.then(function(data){
				$scope.posts = data;
				console.log('POSTS', data);
			});



		CommentsFactory.get()
			.then(function(data){
				console.log('COMMENTS', data);
			});

		$scope.toggleProfile = function(user) {
			$scope.profilePosts = false;
			$scope.profileDetails = true;
			$scope.userDetails = user;
			$scope.postComments = [];

			PostsFactory.getByUserId(user.id)
				.then(function(data){
					$scope.userPosts = data;
				})
		} 

		$scope.showUserProfile = function() {
			$scope.profilePosts = false;
			$scope.profileDetails = true;
		}

		$scope.showUserPosts = function() {
			$scope.profileDetails = false;
			$scope.profilePosts = true;
		}

		$scope.postComments = [];

		$scope.togglePostComments = function(postId, indx) {
			CommentsFactory.getByPostId(postId)
				.then(function(data){
					$scope.postComments[indx] = data;
				})
		}

	}]);