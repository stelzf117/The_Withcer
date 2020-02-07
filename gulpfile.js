var gulp = require('gulp'),
	browserSync  = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false,
	})
});

gulp.task('styles', function() {
	return gulp.src('app/css/*.css')
	.pipe(browserSync.stream())
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
	gulp.watch('app/*.html', gulp.parallel('code'));
	gulp.watch('app/css/*.css', gulp.parallel('styles'))
});

gulp.task('default', gulp.parallel('styles',  'browser-sync', 'watch'));