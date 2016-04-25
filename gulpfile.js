'use strict';
var gulp = require("gulp");
var path = require("path");
var connect = require("gulp-connect");

gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: false,
        port:8030
    });
});

// 默认任务
gulp.task('default', [
    'connect'
]);
