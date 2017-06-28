/**
 * 仅处理sass文件
 **/
const gulp =require('gulp');
const webpack =require('webpack') ;
const sass = require('gulp-sass');
const scss = require('gulp-scss');//ruby 需要安装bundler
const minify=require("gulp-minify");
const cleanCSS = require('gulp-clean-css');
const base64=require('gulp-base64');
const AssetsRelativePath=require("./gulp_css_url");
const cssbeautify=require("gulp-cssbeautify");
const importOnce=require("node-sass-import-once");
const sassImportJson = require('gulp-sass-import-json');
gulp.task('default', ["sass","sass:watch"],function() {
    console.log("develop is building");
});
gulp.task('sass', function () {
    return gulp.src(["./**/*.scss","!node_modules/**/*.scss","!build/**/*.scss","!ApiModal/**/*.scss","!artTemplate/**/*.scss","!config/**/*.scss","!html/**/*.scss","!images/**/*.scss","!manifest/**/*.scss","!script/**/*.scss","!static/**/*.scss"])
        .pipe(sassImportJson())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded',
            importer:importOnce
        }).on('error', sass.logError))
        .pipe(base64({
            baseDir: './',
            extensions: ['png', /\.jpg#datauri$/i],
            exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
            maxImageSize: 8*1024, // bytes
            debug: true
        }))
        .pipe(cleanCSS({compatibility: 'ie10'})) //去除@import重复代码
        .pipe(cssbeautify())
        .pipe(AssetsRelativePath())
        .pipe(gulp.dest("./"));
});
gulp.task('sass:watch', function () {
    const watcher = gulp.watch(["./**/*.scss","!node_modules/**/*.scss","!build/**/*.scss","!ApiModal/**/*.scss","!artTemplate/**/*.scss","!config/**/*.scss","!html/**/*.scss","!images/**/*.scss","!manifest/**/*.scss","!script/**/*.scss","!static/**/*.scss"], ['sass']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});