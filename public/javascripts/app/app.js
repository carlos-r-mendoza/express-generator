var app = angular.module('ngMyApp', ['ui.router']);

app.config(function ($locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

});

// Defines our states
app.config(function($stateProvider) {

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: '/views/index',
			controller: 'MainController'
		});


	// posts views
	$stateProvider
		.state('posts', {
			url: '/posts',
			templateUrl: '/views/posts_feed',
			controller: 'MainController'
		});

});