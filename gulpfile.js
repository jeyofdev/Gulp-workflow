const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const csscomb = require ('gulp-csscomb')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const minifyCss = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')



// delete the dist folder before each asset build
gulp.task('clean', function () {
  return del('dist');
})



// optimize images
gulp.task('img', function(){
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
})



// format scss
gulp.task('csscomb', function(){
  return gulp.src('src/scss/*.scss')
      .pipe(csscomb())
      .pipe(gulp.dest('src/scss/'));
})



// compile and format scss file into css
gulp.task('css', function(){
  return gulp.src('src/scss/app.scss')
    .pipe(sass())
    .pipe(csscomb())
    .pipe(postcss())
    .on('error', sass.logError)
    .pipe(gulp.dest('src/css'))
})



// default task
gulp.task('default', ['clean', 'csscomb', 'css', 'img'], () => {
  gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'))
})



// watch task
gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', ['csscomb']);
  gulp.watch('src/scss/*.scss', ['css'])
})
