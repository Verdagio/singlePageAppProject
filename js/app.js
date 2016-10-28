/*Created by Daniel Verdejo on 11/10/2016.
  ref jslint and global angular usage:
  http://stackoverflow.com/questions/31390428/error-angular-was-used-before-it-was-defined-but-online-editors-able-to-outpu
  */
/*jslint white:true */
/*global angular */
var app = angular.module('app', ["ngRoute", "app.controller","app.services"]);

app.config(function($routeProvider){
    "use strict";
    $routeProvider
    
    .when("/", {
        templateUrl:"views/home.html",
        controller: 'homeCtrl'
    })
    .when("/new", {
        templateUrl: "views/new.html"
        //controller: "app.controller"
    })
    .when("/topic",{
        templateUrl: "views/topic.html"
        //controller: "homeCtrl"
    })
    .otherwise({
        templateUrl: "views/home.html"
    });
});