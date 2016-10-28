/*  Created by Daniel Verdejo 11/10/2016.
    In the following script we will store
    all controllers & services.
    */
/*jslint white:true */
/*global angular */
angular.module('app.controller', [])

.controller('homeCtrl', function($scope) {
        "use strict";
        window.alert("the controller is working");
    
        $scope.home = function(){
            window.alert("the button works");
        };
        
});

