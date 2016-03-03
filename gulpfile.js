var gulp = require('gulp');
var sass = require('gulp-sass');

function swallowError (error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}

gulp.task('sass', function () {
  return gulp.src('./client/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .on('error', swallowError)
    .pipe(gulp.dest('./client/css'));
});
gulp.task('watch', ['sass'], function () {
  gulp.watch('./client/sass/**/*.scss', ['sass']);
});

// gulp.task('watch:sass', function () {
//   // gulp.watch('./client/sass/**/*.scss', ['sass']);
// });