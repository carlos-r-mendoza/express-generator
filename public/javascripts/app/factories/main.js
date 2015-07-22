'use strict';

app.factory('APIConfig', [function() {
	
	return {
		devRoot: 'http://jsonplaceholder.typicode.com',
		prodRoot: '',
		env: 'dev',
		setEnv: function() {

		},
		getRoot: function() {
			if(this.env === 'dev') { //this object
				return this.devRoot;
			} else if (this.env === 'prod') {
				return this.prodRoot;
			}
		}
	}
}]);

app.factory('Users', ['$http', 'APIConfig', function($http, APIConfig) {
	
	return {
		//gets all users		
		get: function() {
			return $http.get(APIConfig.getRoot() + '/users')
					.then(function(response){
						return response.data;
					})
		}
	};	
}]);

app.factory('Posts', ['$http', 'APIConfig', function($http, APIConfig) {
	
	return {
		//gets all posts
		get: function() {
			return $http.get(APIConfig.getRoot() + '/posts')
					.then(function(response){
						return response.data;
					});
		},
		//gets user's posts using user.id
		getByUserId: function(userId) {
			console.log('id', userId)
			return $http.get(APIConfig.getRoot() + '/posts?userId=' + userId)
					.then(function(response){
						console.log('fad',response.data)
						return response.data;
					});
		}
	};
}]);

app.factory('Comments', ['$http', 'APIConfig', function($http, APIConfig) {
	
	return {
		//gets all comments
		get: function() {
			return $http.get(APIConfig.getRoot() + '/comments/')
					.then(function(response){
						return response.data;
					})
		},
		//gets post's comments using post.id
		getByPostId: function(postId) {
			return $http.get(APIConfig.getRoot() + '/comments?postId=' + postId)
					.then(function(response){
						return response.data;
					})			
		}
	}
}]);

app.factory('Auth', ['$http', function($http) {

	return {
		//gets current authenticated user's info
		getUserInfo: function() {
			return $http.get('/authenticatedUserInfo')
					.then(function(response){
						console.log('this is the authenticated', response)
						return response.data;
					});
		}
	};
}]);


