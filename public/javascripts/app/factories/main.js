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

app.factory('States', [function() {

	var states = ['AL - Alabama',
		'AK - Alaska',
		'AZ - Arizona',
		'AR - Arkansas',
		'CA - California',
		'CO - Colorado',
		'CT - Connecticut',
		'DC - The District of Columbia',
		'DE - Delaware',
		'FL - Florida',
		'GA - Georgia',
		'HI - Hawaii',
		'ID - Idaho',
		'IL - Illinois',
		'IN - Indiana',
		'IA - Iowa',
		'KS - Kansas',
		'KY - Kentucky',
		'LA - Louisiana',
		'ME - Maine',
		'MD - Maryland',
		'MA - Massachusetts',
		'MI - Michigan',
		'MS - Mississippi',
		'MO - Missouri',
		'MT - Montana',
		'NE - Nebraska',
		'NV - Nevada',
		'NH - New Hampshire',
		'NJ - New Jersey',
		'NM - New Mexico',
		'NY - New York',
		'NC - North Carolina',
		'ND - North Dakota',
		'OH - Ohio',
		'OK - Oklahoma',
		'PA - Pennsylvania',
		'RI - Rhode Island',
		'SC - South Carolina',
		'SD - South Dakota',
		'TN - Tennessee',
		'TX - Texas',
		'UT - Utah',
		'VT - Vermont',
		'VA - Virginia',
		'WA - Washington',
		'WV - West Virginia',
		'WI - Wisconsin',
		'WY - Wyoming'];


	return {

		get: function() {
			console.log('here', states)
			return states;
		}

	}

}]);

app.factory('NewUser', ['$http', function($http) {

	var user = {
		username: null,
		password: null,
		firstName: null,
		lastName: null,
		phone: null,
		email: null,
		address: {
			address1: null,
			address2: null,
			city: null,
			state: null,
			zipCode: null
		},
		income: {
			salary: null,
			checking: null,
			savings: null
		},
		cosigner: {
			firstName: null,
			lastName: null,
			phone: null,
			email: null
		}
	};

	return {

		get: function() {
			return user;
		},
		create: function() {
			return user;
		},
		update: function(newUser) {
			user.username = newUser.username;
			user.password = newUser.password;

			console.log("factory user", user);
		},
		// checks to see if username is available
		verifyUsername: function(username) {
			$http.post('/verify-username', { username: username })
				.then(function(response) {
					console.log('username verification', response)
					return response.data;
				})
		},
		verifyIncome: function(assets) {
			$http.post('/verify-income', { assets: assets })
				.then(function(response) {
					console.log("response", response)
					return response.data;
				}); 
		}
	}

}]);


