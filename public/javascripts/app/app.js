var app = angular.module('ngMyApp', ['ui.router']);

app.config(function ($locationProvider, $urlRouterProvider) {

	// removes # from url
    $locationProvider.html5Mode(true);

    // redirect to 'index' if url does not exist
    $urlRouterProvider.otherwise('/');

});

// Defines our states
app.config(function($stateProvider) {

	// main view 
	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: '/views/index',
			controller: 'MainController'
		})
		.state('index.friend', {
			// url shows friends name
			url: ':friendName'
		})
		.state('index.friend.posts', {
			url: '/posts'
		})


	// posts views
	$stateProvider
		.state('posts-feed', {
			url: '/posts-feed',
			templateUrl: '/views/posts-feed',
			controller: 'PostsFeedController'
		});
});