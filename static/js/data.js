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

.service('dataStreamService', function($http, posts){
    "use strict";
    
    var data = posts.posts;
    //window.alert(data.data);
    
   // window.console.log(data);
    //window.console.log(JSON.stringify(data));
    
    function getData(){
        $http.get({
            url: '/h',
            data: JSON.parse(data)
        }).success(function(response){
            window.console.log("Success get");
        }).error(function(){
            window.console.log("failed get");
        });
        
    }
    
    function postData(){
        $http.post({
            url: '/h',
            data: JSON.stringify(data)
        }).success(function(response){
            window.alert.log("success post");
        }).error(function(){
            window.console.log("failed post");
        });
    }
    return getData();
});