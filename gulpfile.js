// Initialize packages / modules / plugins
const { src, dest, watch, series, parallel } = require ('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Paths
const files = {
    scssPath: 'src/assets/scss/**/*.scss',
    jsPath: 'src/assets/js/*.js',
    imgPath: 'src/assets/img/*.*',
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
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

//Images
function imgTask() {
    return src([
        files.imgPath
    ])
    .pipe(imagemin())
    .pipe(dest('./dist/img'))
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
        files.imgPath,
        files.templatePath
    ],
        series(
            parallel(scssTask, jsTask, imgTask)
        )
    ).on('change', browserSync.reload);
}

// Default
exports.default = series(
    parallel(scssTask, jsTask, imgTask),
    watchTask
);