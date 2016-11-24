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

.factory('data', function($http, posts){
    "use strict";
    
    var data = posts;
    
    
    
    
    
});