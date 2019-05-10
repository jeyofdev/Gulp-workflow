const { src, dest, watch, series, parallel } = require('gulp')
const del = require('del')
const rename = require("gulp-rename")
const concat = require('gulp-concat')
const csscomb = require('gulp-csscomb')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const minifyCss = require('gulp-clean-css')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const rev = require('gulp-rev')
const revRewrite = require('gulp-rev-rewrite')
const filter = require('gulp-filter')
const revDelete = require('gulp-rev-delete-original')



// delete some files before each asset creation
async function clean () {
  del('./dist')
  del('./src/css')
}



// optimize images
function images () {
  return src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'))
}



// copy the files from the fonts libraries to src folder
async function copyFonts () {
  src('node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(dest('./src/fonts/fontawesome/'))

  src('node_modules/@fortawesome/fontawesome-free/scss/**/*')
    .pipe(dest('./src/scss/vendor/fontawesome'))
}



// copy the css from the libraries to src folder
function copyCss () {
  return src('node_modules/bootstrap/scss/**/*')
    .pipe(dest('./src/scss/vendor/bootstrap'))
}



// copy the js from the libraries to src folder
function copyJs () {
  return src([
    // add js files from used libraries
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ])
  .pipe(concat('vendor.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('./src/js/'))
}



// format scss
function formatScss () {
  return src('./src/scss/app/*.scss')
      .pipe(csscomb())
      .pipe(dest('./src/scss/app'));
}



// compile and format scss file into css
function css () {
  return src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(csscomb())
    .pipe(postcss())
    .on('error', sass.logError)
    .pipe(dest('./src/css'))
}



// copy the fonts to dist folder
function fonts () {
  return src('./src/fonts/**')
    .pipe(dest('./dist/fonts'))
}



// compile html and assets files to dist folder
function compile () {
  return src('./src/*.html')
    .pipe(useref())
    .pipe(gulpif('*.html', htmlmin({ 
      collapseWhitespace: true,
      removeComments: true
    })))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(dest('./dist'))
}



// add the hash on the assets to dist folder
function hash () {
  let assetFilter = filter(['dist/**/*', '!dist/*.html'], { restore: true })
  
  return src('./dist/**')
    .pipe(assetFilter)
    .pipe(rev())
    .pipe(revDelete())
    .pipe(assetFilter.restore)
    .pipe(revRewrite())
    .pipe(dest('./dist'))
    .pipe(rev.manifest('manifest.json'))
    .pipe(dest('./dist'))
}



// task watch
function watcher () {
  watch('./src/scss/app/*.scss', { ignoreInitial: false }, css)
}



// for run task
module.exports = {
  default: series(
    clean, 
    parallel(images, copyFonts, copyCss, copyJs), 
    parallel(formatScss, fonts), 
    css, 
    compile,
    hash
  ),
  watch: series(clean, watcher)
}