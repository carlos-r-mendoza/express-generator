var app = angular.module('ngMyApp', ['ui.router']);

app.config(function ($locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

});

app.config(function($stateProvider) {

	$stateProvider
		.state('posts', {
			url: '/posts-feed',
			templateUrl: '/views/posts_feed.html',
			controller: 'MainController'
		});

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: '/views/index.html',
			controller: 'MainController'
		});
});