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
    'dist', 
    'src/js/vendor.js',
    'src/css'
  ]);
})



// optimize images
gulp.task('img', () => {
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
})



// copy the js from the libraries into a single file
gulp.task('copy-js', () =>  {
  gulp.src([
    // add js files from used libraries
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ])
  .pipe(concat('vendor.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('src/js/'))
})



// copy the css from the libraries into a single file
gulp.task('copy-css', () => {
  gulp.src([
    // add css files from used libraries
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
  ])
  .pipe(concat('vendor.css'))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('src/css/'))
})



// format scss
gulp.task('csscomb', () => {
  return gulp.src('src/scss/app.scss')
      .pipe(csscomb())
      .pipe(gulp.dest('src/scss/'));
})



// compile and format scss file into css
gulp.task('css', () => {
  gulp.src('src/scss/app.scss')
    .pipe(sass())
    .pipe(csscomb())
    .pipe(postcss())
    .on('error', sass.logError)
    .pipe(gulp.dest('src/css'))
})



// default task
gulp.task('default', ['clean', 'copy-js', 'copy-css', 'csscomb', 'css', 'img'], () => {
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
