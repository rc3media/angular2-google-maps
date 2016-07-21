const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('connect', () => {
  $.connect.server({
    root: './dist/bundles/',
    livereload: true,
    port: 9090,
  });
});
