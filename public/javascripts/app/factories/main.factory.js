'use strict';

app.factory('APIConfigFactory', [function() {
	
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

app.factory('UsersFactory', ['$http', 'APIConfigFactory', function($http, APIConfigFactory){
	
	return {		
		getUsers: function() {
			return $http.get(APIConfigFactory.getRoot() + '/users')
					.then(function(response){
						return response.data;
					})
		}
	};	
}]);

app.factory('PostsFactory', ['$http', 'APIConfigFactory', function($http, APIConfigFactory){
	
	return {
		get: function() {
			return $http.get(APIConfigFactory.getRoot() + '/posts')
					.then(function(response){
						return response.data;
					});
		},
		getByUserId: function(userId) {
			console.log('id', userId)
			return $http.get(APIConfigFactory.getRoot() + '/posts?userId=' + userId)
					.then(function(response){
						console.log('fad',response.data)
						return response.data;
					});
		}
	};
}]);

app.factory('CommentsFactory', ['$http', 'APIConfigFactory', function($http, APIConfigFactory){
	
	return {
		get: function() {
			return $http.get(APIConfigFactory.getRoot() + '/comments/')
					.then(function(response){
						return response.data;
					})
		},
		getByPostId: function(postId) {
			return $http.get(APIConfigFactory.getRoot() + '/comments?postId=' + postId)
					.then(function(response){
						return response.data;
					})			
		}
	}
}]);