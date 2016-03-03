var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./client/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/css'));
});
gulp.task('watch', ['sass'], function () {
  gulp.watch('./client/sass/**/*.scss', ['sass']);
});

// gulp.task('watch:sass', function () {
//   // gulp.watch('./client/sass/**/*.scss', ['sass']);
// });