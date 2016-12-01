/*  Created by Daniel Verdejo 11/10/2016.
    In the following script we will store
    all controllers.
    */
/*jslint white:true */
/*global angular */
angular.module('app.controller', [])
/*  D.V. -  16/Nov/16
    The below controller will repeat data
    from the topics factory to be displayed
    on the home.html page.

*/
.controller('homeCtrl', function(topics) {
        "use strict";
        //window.alert("Test message: the controller is working");
    
        var t = this;
    
        t.topics = topics.item;         
})

/* D.V. -   16/Nov/16
   The below will repeat information
   to our topic.html page. Data will
   be passed from the posts factory
   through here to be displayed.
*/
.controller('topicCtrl', function(posts){
    "use strict";
        var p = this;
    
    p.posts = posts.item;
            
        
              
})
/*  D.V. -  16/Nov/16 
    The below controller will be used 
    on the new.html page. Used for adding
    new posts to the posts list.
*/
.controller('addCtrl', function(posts, data){
    "use strict";
    var addMe = this;
    
    addMe.add = function(title, body){
        posts.addPost(title, body);
        //addMe.newP = '';
        //window.alert("Post Saved!");
    };    
});

