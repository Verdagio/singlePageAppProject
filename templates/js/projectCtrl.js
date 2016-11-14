/*  Created by Daniel Verdejo 11/10/2016.
    In the following script we will store
    all controllers.
    */
/*jslint white:true */
/*global angular */
angular.module('app.controller', [])

.controller('homeCtrl', function(topics) {
        "use strict";
        //window.alert("Test message: the controller is working");
    
        var t = this;
    
        t.topics = topics.item;         
})

.controller('topicCtrl', function(posts){
    "use strict";
        var p = this;
            
        p.posts = posts.item; 
            
            
});

