'use strict';

app.factory('MainFactory', ['$http', function($http){

	var root = 'http://jsonplaceholder.typicode.com';

	return {
		getInfo: function() {
			return $http.get(root + '/posts/1')
					.then(function(response){
						return response.data;
					});
		}

	}
}]);