'use strict'; 

module.exports = function(grunt){
	grunt.initConfig({
		uglify:{
			pkg: grunt.file.readJSON('package.json'), //gives access to information in package.json
			dist:{
				src:"public/javascripts/app/**/*.js",
				dest:"public/javascripts/app.min.js"
			}
		},
		watch:{
	    files:"public/javascripts/app/**/*.js",
	    tasks: ["uglify"]
    }
	});
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["uglify", "watch"]);
};