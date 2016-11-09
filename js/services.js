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
        {title: "Games", img: "http://1u88jj3r4db2x4txp44yqfj1.wpengine.netdna-cdn.com/wp-content/uploads/2014/04/tw-division.jpg", info: "All the latest news on everything gaming related. Gameplays, reviews, & discussions", id: 1},
        {title: "TV & Movies", img: "http://www.twitrcovers.com/wp-content/uploads/2015/06/ryan-gosling-man-l.jpg", info: "Movie & TV news. None of the celeb gossip, just reviews and discussions about some of the greatest cinematography right now", id: 2},
        {title: "All", img: "https://stormideaswus.blob.core.windows.net/headerjunction/2014/91/e1246fd3-1717-401a-ab90-623b50e2ff94.jpg", info: "All the good stuff, uncategorized." , id: 3},
        {title: "About", img: "https://stormideaswus.blob.core.windows.net/headerjunction/2014/91/d9cfd268-484f-49be-8fcf-f2f30cc74b77.jpg", info: "Learn a little more about us, what we do, & how we do it", id: 4}
    ];
    
    return topics;
    //$scope.homeServe = '{"homeItems" ['+'{"itemTitle": "Movies", "date": "18-10-2016"},{"itemTitle": "Games", "date": 17-10-2016},{itemTitle: "Other", date: "16-09-2016"},{itemTitle: "Development Diary", date: "17-09-2016"},{itemTitle: "About us", date: "02-06-2016"}]}';
    
    //jsonObj = JSON.parse(homeServe);  
});