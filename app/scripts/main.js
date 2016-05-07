//配置require模块引用
require.config({
    baseUrl: "/app/scripts",
    paths: {
        angular: "vendor/angular/angular.min",
        domReady: "vendor/require/domReady",
        css: "vendor/require/css",
        text: "vendor/require/text",
        angularResource: "vendor/angular/angular-resource.min",
        jquery: "vendor/jquery/jquery",
        bootstrap: "vendor/bootstrap/js/bootstrap.min"
    },
    shim: {
        angularResource: {
            deps: ["angular"]
        },
        bootstrap: {
            deps: ["jquery","css!vendor/bootstrap/css/bootstrap.min"],
            exports: "bootstrap"
        },
        angular: {
            deps: ["jquery", "bootstrap","css!../../style/css/global.css","css!../../style/css/style.css"],
            exports: "angular"
        },

    }
});
//配置angular
require(['app',
    'controllers/mainController',
    'services/testService',
    'directives/testDirective'], function (angular, app) {
    'use strict';
    console.log(arguments)
    app.config(["$routeProvider", function ($routeProvider) {

    }])
});