/*Written by Daniel Verdejo on 18th October 2016
Services will only have one instance running at any one time, 
this promotes abstraction in our code and functionality across
the app.*/

/*jslint white:true */
/*global angular */
angular.module('app.services', [])

.factory('topics', function(){
   "use strict";
 /*Strict mode throws an error whenever a service 
 * tries to use implicit annotations.
 * reference: https://docs.angularjs.org/guide/di
 * */
    window.alert("Test message: the factory is correctly linked");
    
    var topics = {};
    
    topics.item = [
        {title: "Movies", id: 1},
        {title: "Games", id: 4},
        {title: "Other", id: 3},
        {title: "About", id: 2}
    ];
    
    return topics;
    //$scope.homeServe = '{"homeItems" ['+'{"itemTitle": "Movies", "date": "18-10-2016"},{"itemTitle": "Games", "date": 17-10-2016},{itemTitle: "Other", date: "16-09-2016"},{itemTitle: "Development Diary", date: "17-09-2016"},{itemTitle: "About us", date: "02-06-2016"}]}';
    
    //jsonObj = JSON.parse(homeServe);  
});