/*Written by Daniel Verdejo on 18th October 2016
Services will only have one instance running at any one time, 
this allows abstraction in our code and functionality across
the app.*/

/*jslint white:true */
/*global angular */
angular.module('app.services', [])

.factory('homeServe', function($scope){
   "use strict";
 /*Strict mode throws an error whenever a service 
 * tries to use implicit annotations.
 * reference: https://docs.angularjs.org/guide/di
 * */
    $scope.homeServe = '{"homeItems" ['+'{"itemTitle": "Movies", "date": "18-10-2016"},{"itemTitle": "Games", "date": 17-10-2016},{itemTitle: "Other", date: "16-09-2016"},{itemTitle: "Development Diary", date: "17-09-2016"},{itemTitle: "About us", date: "02-06-2016"}]}';
    
    //jsonObj = JSON.parse(homeServe);
    

    
});



