'use strict';

app.filter('postsUsers', function() {
	return function(posts) {
		return posts.filter(function(post){
			return post.userId === 5;
		});
	}
});