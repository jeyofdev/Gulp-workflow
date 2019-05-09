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



### Available Gulp commands

* `gulp` — Compile and optimize the files in assets directory for production
* `gulp watch` — Compile assets when file changes are made




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
* [gulp-imagemin](https://github.com/1000ch/gulp-image) optimize PNG, JPEG, GIF, SVG images




### Development and Production environment

* clean public folder before building
* optimize the images files
* compiles sass/scss to the css file
* copies all web fonts
