'use strict'; 

module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n\n'
			},
			dist: {
				src: 'public/javascripts/app/**/*.js',
				dest: 'public/javascripts/app.min.js'
			}

		},
		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					'public/views/posts_feed.html': ['views/posts_feed.jade'],
					'public/views/index.html': ['views/index.jade']
				}
			}
		},
		// uglify:{
		// 	, //gives access to information in package.json
		// 	dist:{
		// 		src:"public/javascripts/app/**/*.js",
		// 		dest:"public/javascripts/app.min.js"
		// 	}
		// },
		watch:{
		    files: 'public/javascripts/app/**/*.js',
		    tasks: ['concat']
    	}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'jade', 'watch']);
};