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
		// .state('index.friend', {
		// 	// url shows friends name
		// 	url: ':friendName'
		// })
		// .state('index.friend.posts', {
		// 	url: '/posts'
		// })


	// posts views
	$stateProvider
		.state('posts-feed', {
			url: '/posts-feed',
			templateUrl: '/views/posts-feed',
			controller: 'PostsFeedController'
		})
		.state('to-do', {
			url: '/do-do',
			templateUrl: '/views/to-do',
		})

	$stateProvider
		.state('login-page', {
			url: '/login-page',
			templateUrl: '/views/login'
		});	


	// create account states
	$stateProvider
		.state('user-info', {
			url: '/create-account/user-info',
			templateUrl: '/create-account/user-info',
			controller: 'UserInfoController'
		})
		.state('income-info', {
			url: '/create-account/income-info',
			templateUrl: '/create-account/income-info',
			controller: 'UserIncomeController'
		})
		.state('billing-info', {
			url: '/create-account/billing-info',
			templateUrl: '/create-account/billing-info'
		});

});