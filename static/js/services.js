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
/*  D.V. - 16/Nov/16
    1 - Factory to control all posts to be displayed on topics pages,
    will contain an id, title, & body. 3 placeholder posts 
    manually inserted for testing purposes. 
    
    2 - Add function to be added to enable users to make their own posts. 
    
    3 - Post tagging to be implemented later for filtering, only 
    basic functionality required at the moment.
    
    4 - How will this link to database?
    Possible(hopeful) solution: parse the data written into .json 
    object file along with a http post request to invoke api to
    pass file to database, update information in database and send
    back the updated data.
    */
.factory('posts', function(data, $log){
    "use strict";
    var posts={}; 
    
    /*  D.V. 16/Nov/16 
        - Add post function below - 
        post id will be automated, title & body to be entered 
        by the user. 
        
        The posts here will need to be passed down to a lower
        layer, with aim of parsing to .json file and making a request from
        api.
    */
    posts.item = data.getData();
    
    posts.addPost = function(title, body){    
        var i;
        var myObj;
        posts.item.push({ body: body, title: title});
       
        for(i = 0; i < posts.item.length; i++){
            $log.info("in loop " + JSON.stringify(posts.item[i]));
            if(i === posts.item.length-1){
                $log.info("in da if");
                myObj = posts.item[i];
            }
            
        }
        data.postData(myObj);
       //$log.info("post function invoked" + posts.item[3]);
       //posts.item = data.getData();
   };
    return posts;
});