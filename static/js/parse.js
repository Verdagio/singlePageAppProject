/*  Created by Daniel Verdejo & Karle Sleith on 01/11/2016
    In this factory we will take in raw 
    data from our DB and then parse that
    into our services.js which communicates with
    our controllers.
*/

/*jslint white:true */
/*global angular */
angular.module('app.parse', [])

.factory('data', function(posts, $http){
   "use strict";
    //window.alert("Test message: the parse info is correctly linked");
    
    
    var dataToJson = this;
    
    
    $http.post({
        method: 'POST',
        url: 'http://127.0.0.1:5000',
                
        data: dataToJson.posts,
        dataType: "json",
        contentType: "application/json"
        
        
    }).then(function successCallback(response){
        window.alert("Success - Post");
        
    }, function errorCallback(response){
        window.alert("fail - Post");
          
    });
    
}); 