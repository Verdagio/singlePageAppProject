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
    //window.alert("Test message: the factory is correctly linked");
    
    var topics = {};
    /*ALL IMAGES USED ARE SOURCED FROM AROUND THE WEB, FOR EXAMPLE USE ONLY*/
    topics.item = [
        {title: "Games", img: "http://1u88jj3r4db2x4txp44yqfj1.wpengine.netdna-cdn.com/wp-content/uploads/2014/04/tw-division.jpg", info: "All the latest news on everything gaming related. Gameplays, reviews, & discussions", id: 1},
        {title: "TV & Movies", img: "http://www.twitrcovers.com/wp-content/uploads/2015/06/ryan-gosling-man-l.jpg", info: "Movie & TV news. None of the celeb gossip, just reviews and discussions about some of the greatest cinematography right now", id: 2},
        {title: "All", img: "https://stormideaswus.blob.core.windows.net/headerjunction/2014/91/e1246fd3-1717-401a-ab90-623b50e2ff94.jpg", info: "All the good stuff, uncategorized." , id: 3},
        {title: "About", img: "https://stormideaswus.blob.core.windows.net/headerjunction/2014/91/d9cfd268-484f-49be-8fcf-f2f30cc74b77.jpg", info: "Learn a little more about us, what we do, & how we do it", id: 4}
    ];
    
    return topics;
 
})

.factory('posts', function(){
    "use strict";
    var posts={};

    posts.item = [{title:"An Intro!", body:"Hello there! Welcome to the first post of the blog. In our blog we're going to talk about everything from games, to tv shows & movies. We encourage you to take part in the discussion posting your own thoughts and opinions on any and all things gaming, tv, & film. Thanks for reading and get posting :)", tag: "all"},
    {title:"An Intro to games!", body:"Hello there! Welcome to the first post of the blog. In this section it's all fun and games. We encourage you to take part in the discussion posting your own thoughts and opinions on any and all things gaming. Thanks for reading and get posting :)", tag: "games"},
    {title:"An Intro!", body:"Hello there! Welcome to the first post of the blog. In this section it's show time, the discussions, spoilers, and reactions to the best of tv & film. We encourage you to take part in the discussion posting your own thoughts and opinions on any and all things tv, & film. Thanks for reading and get posting :)", tag: "tv / movie"}   
    ];
    
    return posts;
    
});