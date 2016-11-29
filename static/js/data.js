/*  Created by Daniel Verdejo on 23 / 11 / 2016
    Aim of script:
        1 - Use a factory to take data in from our db
        2 - Parse said data to our services.js script
        3 - Send data to the db coming from services.js
    How it will be done:
        Using the $http service we will make GET and POST
        requests to our RESTFUL api (app.py) which will  
        handle the the data flow to and from our database */

/*jslint white: true*/
/*global angular*/

angular.module('app.data',[])

.factory('data', function($http, $log){
    "use strict";
    
    var data = {};
    //window.alert(data.data);
    
   // window.console.log(data);
    //window.console.log(JSON.stringify(data));
    
    //data.getData = function(){
    /*data.item = [{id: 1, title:"An Intro!", body:"Hello there! Welcome to the first post of the blog. In our blog we're going to talk about everything from games, to tv shows & movies. We encourage you to take part in the discussion posting your own thoughts and opinions on any and all things gaming, tv, & film. Thanks for reading and get posting :) "},
    {id: 2, title:"An Intro to games!", body:"Hello there! Welcome to the first post of the blog. In this section it's all fun and games. We encourage you to take part in the discussion posting your own thoughts and opinions on any and all things gaming. Thanks for reading and get posting :)"},
    {id: 3, title:"An Intro!", body:"Hello there! Welcome to the first post of the blog. In this section it's show time, the discussions, spoilers, and reactions to the best of tv & film. We encourage you to take part in the discussion posting your own thoughts and opinions on any and all things tv, & film. Thanks for reading and get posting :)"}   
    ];*/
    
        data.getData = function(){
            $http({
                method: 'GET',
                url: 'http://127.0.0.1:5000/h'
            }).then(function success(response){
                $log.info(" hello this is the get", response);
                data.item = response.data;
            }, function error(response){
                $log.info(" damn"+response);
            });
        };
    
        data.postData = function(data){
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:5000/h'
            }).then(function sucess(response){
                $log.info(" hello from post"+response);
                JSON.stringify(data.item);
            }, function error(response){
                $log.info(" damn from post "+response);
            });
        };
        return data;

    });