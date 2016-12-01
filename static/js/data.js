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
    
   /*   The below code is for testing purposes.
        this test lead to the a successful solution! :) 
   data.getData = function(){
       var i;
       var myObj = [];
        data.item = [
            {id: 1, title:"An Intro to A!", body:"Hello there AAA! :) "},
            {id: 2, title:"An Intro to B!", body:"Hello there BBB! :)"},
            {id: 3, title:"An Intro to C!", body:"Hello there! ccc:)"}];
       
        for (i = 0; i < data.item.length; i++){
            myObj[i] = (data.item[i]);
        }
        return myObj;
    };   */ 
    
    

     data.getData = function(){
         var i;
         var myObj = [];
            $http({
                method: 'GET',
                url: '/h'
            }).then(function success(response){
                $log.info(" hello the get", response.data);
                for (i = 0; i < response.data.length; i++){
                    myObj[i] = (response.data[i]);
                }
                if(response.data.length === 0){
                    $log.info("empty set");
                }else{
                    data.item = response.data;
                    $log.info("SUCCESS!!" + myObj[0]);
                }            
            }, function error(response){
                $log.info(" damn"+response);
            });
            return myObj;
        };
    
        data.postData = function(posts){
            $http({
                method: 'POST',
                url: '/h'
            }).then(function sucess(response){
                response.data = JSON.parse(posts.item);
                $log.info(" hello from post"+response);
            }, function error(response){
                $log.info(" damn from post "+response);
            });
        };
    
        return data;

    });
