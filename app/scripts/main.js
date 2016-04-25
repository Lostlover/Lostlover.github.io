//配置require模块引用
require.config({
    baseUrl:"/app/scripts",
    paths: {
        angular: "vendor/angular/angular.min",
        domReady: "vendor/require/domReady",
        angularResource: "vendor/angular/angular-resource.min",
        jquery: "vendor/jquery/jquery"
    },
    shim: {
        angularResource: {
            deps: ["angular"]
        },
        angular: {
            deps: ["jquery"],
            exports: "angular"
        }
    }
});
//配置angular
require(['app',
    'controllers/mainController',
    'services/testService',
    'directives/testDirective'], function (angular,app) {
    'use strict';
    console.log(arguments)
    app.config(["$routeProvider",function($routeProvider){

    }])
});