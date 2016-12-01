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
    
    
/*  In the getData function we make a http GET on the /h route.
    If this is successful we iterate over our response data
    and save our data elements into their respective index in
    our array we then return this array. If there is nothing in
    the response data we send a 'empty set' message to the console,
    or if theres an error we print this to the console also*/
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
                    //data.item = response.data;
                    $log.info("Success!!" + myObj);
                }            
            }, function error(response){
                $log.info("Failure " + response);
            });
            return myObj;
        };
    
        data.postData = function(posts){
            $log.info("Entering http post " + posts);
            $http.post('/h', posts).then(function success(res){
                $log.info("success" + posts);
            }, function error(res){
                $log.info("fail "+ posts);
            });
            /*$http({
                method: 'POST',
                url: '/h',
                data: posts,
                Content-Type: 'application/json'
            }).then(function sucess(response){
                $log.info("Success on post " + response.data);
                
            }, function error(response){
                $log.info("Failure on post " + response.data);
            });*/
        };
    
        return data;

    });
