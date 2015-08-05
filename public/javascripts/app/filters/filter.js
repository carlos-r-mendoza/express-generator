'use strict';

app.filter('completedCheckMark', function() {
	return function(taskStatus) {
		console.log(taskStatus)
		if(taskStatus) {
			return "yes";
		} else {
			return "";
		}
	}
});

app.filter('pendingCheckMark', function() {
	return function(taskStatus) {
		if(!taskStatus) {
			return "yes";
		} else {
			return "";
		}
	}
});