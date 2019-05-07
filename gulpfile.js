const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')



// compile and format scss file into css
gulp.task('css', function(){
  return gulp.src('src/scss/app.scss')
    .pipe(sass())
    .pipe(postcss())
    .on('error', sass.logError)
    .pipe(gulp.dest('src/css'))
})



// default task
gulp.task('default', ['css'], () => {
  
})



// watch task
gulp.task('watch', () => {
  gulp.watch('src/scss/*.scss', ['css'])
})
