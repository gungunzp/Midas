var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var stylesPath = 'scss/';

gulp.task('sass', function() {
	gulp.src(stylesPath + '/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('css'));
});

gulp.task('browserSync', function() {
	browserSync.init(['*.html', 'css/*.css', 'js/*.js'],{
		server: {
			baseDir: ''
		}
	});
});

gulp.task('watch',['sass','browserSync'], function() {
	gulp.watch([stylesPath + '/*.scss', '*html'], ['sass'])

});

gulp.task ('default', ['sass','browserSync','watch']);﻿