/**
 * 仅处理sass文件
 **/
const gulp =require('gulp');
const webpack =require('webpack') ;
const sass = require('gulp-sass');
const scss = require('gulp-scss');//ruby 需要安装bundler
const minify=require("gulp-minify");
const cleanCSS = require('gulp-clean-css');
const gulpWebpack=require("gulp-webpack");
const base64=require('gulp-base64');

const AssetsRelativePath=require("./gulp_css_url");
gulp.task('default', ["sass","sass:watch"],function() {
    console.log("develop is building");
});
gulp.task('sass', function () {
    return gulp.src('./styles/**/*.scss')
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(AssetsRelativePath("styles"))
        .pipe(base64({
            baseDir: 'images',
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
            exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
            maxImageSize: 8*1024, // bytes
            debug: true
        }))
        .pipe(gulp.dest('./styles'));
});
gulp.task('sass:watch', function () {
    const watcher = gulp.watch('./styles/**/*.scss', ['sass']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

