// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');

// Concatenate JS Files
gulp.task('scripts', function() {
  return gulp.src('scripts/src/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('scripts/build'));
});

// Compile SASS Files
gulp.task('sass', function() {
  return sass('scss/src/index.scss', {
      style: 'compressed'
    })
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('scss/build/css'));
});

// Watch all Files for changes
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('scripts/src/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('scss/src/*.scss', ['sass']);
 });

// Default Task
gulp.task('default', ['scripts', 'sass', 'watch']);
