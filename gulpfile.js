const gulp = require('gulp')
const del = require('del')
const rename = require("gulp-rename")
const concat = require('gulp-concat')
const csscomb = require ('gulp-csscomb')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const minifyCss = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')



// delete some files before each asset creation
gulp.task('clean', () =>  {
  return del.sync([
    './dist',
    './src/css'
  ]);
})



// optimize images
gulp.task('img', () => {
  return gulp.src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
})



// copy the files from the fonts libraries
gulp.task('copy-fonts', () => {
  gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(gulp.dest('./src/fonts/fontawesome/'))

  gulp.src('node_modules/@fortawesome/fontawesome-free/scss/**/*')
    .pipe(gulp.dest('./src/scss/vendor/fontawesome'))
})



// copy the css from the libraries
gulp.task('copy-css', () => {
  gulp.src([
    'node_modules/bootstrap/scss/**/*'
  ])
  .pipe(gulp.dest('./src/scss/vendor/bootstrap'))
})



// copy the js from the libraries
gulp.task('copy-js', () =>  {
  gulp.src([
    // add js files from used libraries
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ])
  .pipe(concat('vendor.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./src/js/'))
})



// format scss
gulp.task('csscomb', () => {
  return gulp.src('./src/scss/app.scss')
      .pipe(csscomb())
      .pipe(gulp.dest('./src/scss/'));
})



// compile and format scss file into css
gulp.task('css', () => {
  gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(csscomb())
    .pipe(postcss())
    .on('error', sass.logError)
    .pipe(gulp.dest('./src/css'))
})



// default task
gulp.task('default', ['clean', 'copy-fonts', 'copy-js', 'copy-css', 'csscomb', 'css', 'img'], () => {
  gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./dist/fonts'))
        
  gulp.src('./src/*.html')
    .pipe(useref())
    // .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('./dist'))
})



// watch task
gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.scss', ['csscomb']);
  gulp.watch('./src/scss/*.scss', ['css'])
})
