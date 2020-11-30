// Initialize packages / modules / plugins
const { src, dest, watch, series, parallel } = require ('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// Paths
const files = {
    scssPath: 'src/assets/scss/**/*.scss',
    jsPath: 'src/assets/js/**/*.js',
    templatePath: '*.html'
}

// SCSS
function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'));
}

//JS
function jsTask() {
    return src([
        files.jsPath
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

//Watcher
function watchTask() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    watch([
        files.scssPath,
        files.jsPath,
        files.templatePath
    ],
        series(
            parallel(scssTask, jsTask)
        )
    ).on('change', browserSync.reload);
}

// Default
exports.default = series(
    parallel(scssTask, jsTask),
    watchTask
);