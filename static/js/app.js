/*Created by Daniel Verdejo on 11/10/2016.
  ref jslint and global angular usage:
  http://stackoverflow.com/questions/31390428/error-angular-was-used-before-it-was-defined-but-online-editors-able-to-output
  
  
  */


/*jslint white:true */
/*global angular */
var app = angular.module('app', ["ngRoute", "app.controller","app.services", "app.data"]);

app.config(function($routeProvider){
    "use strict";
    $routeProvider
    
    .when("/", {
        templateUrl:"static/views/home.html",
        controller: 'homeCtrl'
    })
    .when("/new", {
        templateUrl: "static/views/new.html"
        //controller: "topicCtrl"
    })
    .when("/topic", {
        templateUrl: "static/views/topic.html",
        controller: "topicCtrl"
    })
    .otherwise({
        templateUrl: "static/views/home.html"
    });
});