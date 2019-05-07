const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const csscomb = require ('gulp-csscomb')



// format scss
gulp.task('csscomb', function(){
  return gulp.src('src/scss/*.scss')
      .pipe(csscomb())
      .pipe(gulp.dest('src/scss/'));
});



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
gulp.task('default', ['csscomb', 'css'], () => {
  
})



// watch task
gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', ['csscomb']);
  gulp.watch('src/scss/*.scss', ['css'])
})
