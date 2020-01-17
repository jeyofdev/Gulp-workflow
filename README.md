# Gulp-workflow

My personal Gulp workflow that allow build web apps and sites much faster




### Tools

Check that the latest version of [Nodejs](https://nodejs.org/en/download/) is installed :
```sh
$ node -v
```

Check that the latest version of [Yarn](https://yarnpkg.com/en/docs/install) is installed :
```sh
$ yarn -v
```



### Gulp installation

Install Gulp et gulp-cli from CLI
```sh
$ yarn add gulp --dev
$ yarn add gulp-cli --dev
```

Check if [gulp](https://gulpjs.com/) is correctly installed
```sh
$ gulp -v
```



### Available Gulp commands

* `gulp` — Compile and optimize the files to dist directory
* `gulp lib` — copy the libraries that you need
* `gulp watch` — Compile assets when file changes are made
* `gulp prod` — Compile and optimize the files to dist directory for Production environment




### Initialize a project with gulp

Clone the depot and install all the dependencies :
```sh
$ yarn install
```




### Features

* [Gulp](https://github.com/gulpjs/gulp/tree/v3.9.1) task runner
* [Bootstrap](http://getbootstrap.com/) the most popular HTML, CSS and JS framework
* [Font Awesome](https://fontawesome.com/) the web's most popular icon set and toolkit
* [Postcss](https://postcss.org/) A tool for transforming CSS with JavaScript
* [browserslist](https://github.com/browserslist/browserslist) live reloading (browser update after changes)
* [Autoprefixer](https://github.com/postcss/autoprefixer) plugin to parse CSS and add vendor prefixes
* [Eslint](https://eslint.org/) a fully pluggable tool for identifying and reporting on patterns in JavaScript




### Dependencies

* [del](https://github.com/sindresorhus/del) delete files and directories
* [gulp-rename](https://github.com/hparra/gulp-rename) rename files easily
* [gulp-concat](https://github.com/gulp-community/gulp-concat) streaming concat middleware for gulp
* [gulp-csscomb](https://github.com/koistya/gulp-csscomb) formats CSS according to a pre-defined coding style
* [gulp-sass](https://github.com/dlmanning/gulp-sass) compile Sass files
* [gulp-postcss](https://github.com/postcss/gulp-postcss) transform CSS with JavaScript
* [gulp-useref](https://github.com/jonkemp/gulp-useref) parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets
* [gulp-if](https://github.com/robrich/gulp-if) conditionally run a task
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify) minify JavaScript
* [gulp-clean-css](https://github.com/scniro/gulp-clean-css) minify css
* [gulp-rename](https://github.com/hparra/gulp-rename) rename files easily
* [gulp-imagemin](https://github.com/1000ch/gulp-image) optimize PNG, JPEG, GIF, SVG images
* [gulp-rev](https://github.com/sindresorhus/gulp-rev) static asset revisioning by appending content hash to filenames
* [gulp-rev-rewrite](https://github.com/TheDancingCode/gulp-rev-rewrite) rewrite occurences of filenames
* [gulp-filter](https://github.com/sindresorhus/gulp-filter) filter files
* [gulp-rev-delete-original](https://github.com/nib-health-funds/gulp-rev-delete-original) delete the original file rewritten by gulp-rev
* [gulp-eslint](https://github.com/adametry/gulp-eslint) a fully pluggable tool for identifying and reporting on patterns in JavaScript




### Development and Production environment

* clean dist directory before building




### Development environment

* copy the libraries that you need
* format scss
* compiles sass/scss to the css file
* check the javascript code with eslint
* builds source-maps




### Production environment

* copies all web fonts
* optimize the images files
* minifies html, css and js
* add a hash to the assets files
* generating an asset manifest